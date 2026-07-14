'use client'
import { useState } from 'react'
export default function CreemTestPage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const handleTest = async (plan) => {
    setLoading(true); setErr(''); setUrl('')
    try {
      const r = await fetch('/api/creem/checkout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({plan, _testMode: true})
      })
      const d = await r.json()
      if (d.url) setUrl(d.url); else setErr(JSON.stringify(d))
    } catch(e) { setErr(String(e)) }
    finally { setLoading(false) }
  }
  return (
    <div className='mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-4 p-4 text-center'>
      <h1 className='font-pixel text-lg text-text-primary'>Creem Test</h1>
      <p className='text-sm text-text-secondary'>Test checkout without Google login</p>
      <div className='flex gap-3'>
        <button onClick={() => handleTest('pro')} disabled={loading}
          className='rounded-lg bg-accent px-6 py-3 text-white disabled:opacity-50'>
          {loading ? '...' : 'Test Pro'}
        </button>
        <button onClick={() => handleTest('unlimited')} disabled={loading}
          className='rounded-lg bg-primary px-6 py-3 text-white disabled:opacity-50'>
          {loading ? '...' : 'Test Unlimited'}
        </button>
      </div>
      {url && (
        <div className='mt-4'>
          <p className='mb-2 text-sm'>Click to open checkout:</p>
          <a href={url} target='_blank' rel='noopener noreferrer'
            className='text-primary underline'>Open Creem Checkout</a>
        </div>
      )}
      {err && <p className='mt-4 text-sm text-danger'>{err}</p>}
    </div>
  )
}
