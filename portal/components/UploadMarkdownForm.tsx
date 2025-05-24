'use client'
import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export function UploadMarkdownForm() {
  const [text, setText] = useState('')
  const [path, setPath] = useState('myth/fragment')
  const [layer, setLayer] = useState('L0')
  const [result, setResult] = useState('')

  async function handleUpload() {
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, path, layer })
    })
    const data = await res.json()
    setResult(`✅ Загрузено: ID ${data.id}`)
  }

  return (
    <div className="space-y-4">
      <Textarea rows={6} value={text} onChange={e => setText(e.target.value)} placeholder="Вставь Markdown-фрагмент..." />
      <input value={path} onChange={e => setPath(e.target.value)} className="w-full border rounded px-2 py-1 text-sm" placeholder="Путь (например, myth/fragment)" />
      <input value={layer} onChange={e => setLayer(e.target.value)} className="w-full border rounded px-2 py-1 text-sm" placeholder="Слой памяти (L0, L4 и т.д.)" />
      <Button onClick={handleUpload}>📥 Загрузить во Внутреннюю Память</Button>
      {result && <p className="text-sm text-muted-foreground">{result}</p>}
    </div>
  )
}
