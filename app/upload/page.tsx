import { UploadMarkdownForm } from '@/components/UploadMarkdownForm'

export default function Page() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">📄 Загрузка Markdown-файлов</h1>
      <UploadMarkdownForm />
    </div>
  )
}

