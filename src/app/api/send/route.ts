import { Resend } from 'resend'
import { WelcomeEmail } from '@/components/emails/welcome-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Donatto Dev <contato@donattodev.com.br>',
      to: ['donattodev@gmail.com'],
      subject: 'Obrigado pela sua mensagem',
      react: WelcomeEmail(),
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
