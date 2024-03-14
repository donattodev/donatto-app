import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data } = await resend.emails.send({
      from: 'donattodev@gmail.com',
      to: 'donattodev@gmail.com',
      subject: 'Testando envio de e-mails',
      html: '<p>è otimo ver tudo funcionando!</p>',
    })
    return NextResponse.json({ message: 'Email Send', data })
  } catch (err) {
    return NextResponse.json({ err })
  }
}
