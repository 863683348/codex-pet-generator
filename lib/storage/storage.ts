import { getSupabaseServer } from '@/lib/supabase/server'
import { STORAGE_BUCKET, STORAGE_PATHS } from '@/lib/utils/constants'

export async function uploadSourceImage(taskId: string, file: Buffer): Promise<string> {
  const supabase = getSupabaseServer()
  const path = STORAGE_PATHS.source(taskId)

  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(path, file, { contentType: 'image/png', upsert: true })

  if (error) throw new Error(`Failed to upload source image: ${error.message}`)

  return path
}

export async function uploadBaseImage(taskId: string, buffer: Buffer): Promise<{ path: string; url: string }> {
  const supabase = getSupabaseServer()
  const path = STORAGE_PATHS.base(taskId)

  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(path, buffer, { contentType: 'image/png', upsert: true })

  if (error) throw new Error(`Failed to upload base image: ${error.message}`)

  const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path)
  return { path, url: data.publicUrl }
}

export async function uploadSpritesheet(taskId: string, buffer: Buffer): Promise<{ path: string; url: string }> {
  const supabase = getSupabaseServer()
  const path = STORAGE_PATHS.spritesheet(taskId)

  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(path, buffer, { contentType: 'image/webp', upsert: true })

  if (error) throw new Error(`Failed to upload spritesheet: ${error.message}`)

  const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path)
  return { path, url: data.publicUrl }
}

export async function uploadZip(petId: string, buffer: Buffer): Promise<{ path: string; url: string }> {
  const supabase = getSupabaseServer()
  const path = STORAGE_PATHS.zip(petId)

  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(path, buffer, { contentType: 'application/zip', upsert: true })

  if (error) throw new Error(`Failed to upload zip: ${error.message}`)

  const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path)
  return { path, url: data.publicUrl }
}

export function getPublicUrl(path: string): string {
  const supabase = getSupabaseServer()
  const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path)
  return data.publicUrl
}
