import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const result =
      await sql`CREATE TABLE Newsletter  ( Name varchar(255), Whatsapp varchar(25), Mensagem varchar(5), Politica varchar(25) )`

    return NextResponse.json({ result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
