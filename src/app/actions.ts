'use server'

import { sql } from '@vercel/postgres'

export async function saveLead({
  username,
  email,
  assunto,
  whatsapp,
  mensagem,
}: {
  username: string
  email: string
  assunto: string
  whatsapp: string
  mensagem: string
}) {
  try {
    await sql`INSERT INTO Eventos (username, email, assunto, whatsapp, mensagem) VALUES (${username}, ${email}, ${assunto}, ${whatsapp}, ${mensagem})`
  } catch (error) {
    console.log(error)
  }
}
