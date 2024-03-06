import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'contato@donattodev.com',
      to: 'felippedonatto0@gmail.com',
      subject: 'Testando envio de e-mails',
      html: '<p>è otimo ver tudo funcionando!</p>',
    })
    return NextResponse.json({ message: 'Email Send' })
  } catch (err) {
    return NextResponse.json({ err })
  }
}
