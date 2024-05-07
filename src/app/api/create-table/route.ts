import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Renomeando a tabela InfoMatricula para Info_Matricula
    const result = await sql`ALTER TABLE InfoMatricula RENAME TO Info_Matricula`

    return NextResponse.json({ result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
