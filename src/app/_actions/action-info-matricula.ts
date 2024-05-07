'use server'

import { sql } from '@vercel/postgres'

export async function saveInfoMatriculaProgame({
  name,
  child,
  shift,
  whatsapp,
  infoTypes,
}: {
  name: string
  child: string
  shift: string
  whatsapp: string
  infoTypes: string
}) {
  try {
    await sql`INSERT INTO info_matricula (name, child, shift, whatsapp, infoTypes) VALUES (${name}, ${child}, ${shift}, ${whatsapp}, ${infoTypes})`
  } catch (error) {
    console.log(error)
  }
}
