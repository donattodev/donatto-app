'use server'

import { sql } from '@vercel/postgres'

export async function saveNewsletterProgame({
  name,
  whatsapp,
  mensagem,
  politica,
}: {
  name: string
  whatsapp: string
  mensagem: string
  politica: boolean
}) {
  try {
    await sql`INSERT INTO Newsletter (name, whatsapp, mensagem, politica) VALUES (${name}, ${whatsapp}, ${mensagem}, ${politica})`
  } catch (error) {
    console.log(error)
  }
}
