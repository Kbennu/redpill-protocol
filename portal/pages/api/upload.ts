import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { text, path, layer } = req.body
    const result = await supabase.from("wiki_fragments").insert([
      {
        text,
        path,
        layer,
        created_at: new Date().toISOString()
      }
    ])
    return res.status(200).json({ status: 'uploaded', id: result?.data?.[0]?.id })
  }
  return res.status(405).end()
}
