import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const result =
      await sql`CREATE TABLE Eventos  ( Username varchar(255), Email varchar(255), Assunto varchar(5), Whatsapp varchar(25), Mensagem varchar(255) )`

    return NextResponse.json({ result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
