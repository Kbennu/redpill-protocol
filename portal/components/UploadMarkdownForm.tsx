'use client'
import { useState } from 'react'
import { Textarea } from '@/portal/components/ui/textarea'
import { Button } from '../components/ui/button'

export function UploadMarkdownForm() {
  const [markdown, setMarkdown] = useState('')
  const [status, setStatus] = useState('')

  const handleUpload = async () => {
    setStatus('Загрузка...')
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ markdown }),
    })
    const data = await res.json()
    setStatus(data.status || 'Готово')
  }

  return (
    <div className="space-y-4">
      <Textarea
        rows={10}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Вставь Markdown-фрагмент..."
      />
      <Button onClick={handleUpload}>📄 Загрузить</Button>
      {status && <p className="text-sm text-muted-foreground">{status}</p>}
    </div>
  )
}

