// Remote Supabase setup — runs from this sandbox over HTTPS (443).
// Requires SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY in the environment.
// DB direct port (5432/6543) is firewalled here, so we use the SQL + Storage REST APIs.
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/$/, '')
const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL || !SERVICE_ROLE) {
  console.error('Missing env: set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const authHeaders = {
  Authorization: `Bearer ${SERVICE_ROLE}`,
  ApiKey: SERVICE_ROLE,
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

async function runSql(query) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/sql`, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify({ query }),
  })
  const text = await res.text()
  if (!res.ok) throw new Error(`SQL API ${res.status}: ${text}`)
  return text
}

async function createBucket() {
  // Try Storage REST API first (the supported way).
  const res = await fetch(`${SUPABASE_URL}/storage/v1/bucket`, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify({ name: 'pet-assets', public: true }),
  })
  const text = await res.text()
  if (res.status === 409) return 'bucket already exists (409)'
  if (!res.ok) {
    // Fallback: insert directly into storage.buckets via SQL API.
    console.log('  Storage API create failed, falling back to SQL insert:', text)
    await runSql(
      `INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
       VALUES ('pet-assets','pet-assets',true,10485760,ARRAY['image/png','image/webp','image/jpeg'])
       ON CONFLICT (id) DO NOTHING;`
    )
    return 'bucket created via SQL fallback'
  }
  return `bucket created: ${text}`
}

async function verify() {
  const tbl = await runSql(`SELECT to_regclass('public.pets') AS t;`)
  console.log('  pets table:', tbl)
  const bkt = await runSql(`SELECT id, public FROM storage.buckets WHERE id='pet-assets';`)
  console.log('  pet-assets bucket:', bkt)
}

async function main() {
  const sql = readFileSync(join(__dirname, '..', 'supabase', 'migrations', '001_init.sql'), 'utf8')
  console.log('==> Applying migration (001_init.sql) ...')
  await runSql(sql)
  console.log('==> Migration applied.')
  console.log('==> Creating storage bucket pet-assets ...')
  console.log('  ', await createBucket())
  console.log('==> Verifying ...')
  await verify()
  console.log('DONE.')
}

main().catch((e) => {
  console.error('SETUP FAILED:', e.message)
  process.exit(1)
})
