import * as React from 'react'

import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

export const WelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>
      Olá, obrigado por entrar em contato. Estarei lhe respondo assim que
      visualizar seu e-mail.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Hr style={hr} />
          <Text style={paragraph}>
            Obrigado por entrar em contato. Espero poder lçhe ajudar com a minha
            resposta. Como atender meus clientes e parceiros sempre dedico um
            periodo do meu dia para ler e responder todos os e-mails.
          </Text>
          <Text style={paragraph}>
            Mas, se você estiver com a necessidade de entrar em contato mais
            rápido pode entrar em contato pelo link abaixo.
          </Text>
          <Button style={button} href="https://wa.me/message/EVND3KQTJJOTL1">
            Fale diretamente pelo WhatsApp
          </Button>
          <Hr style={hr} />

          <Text style={paragraph}>Obrigado por entrar em contato!</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default WelcomeEmail

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const box = {
  padding: '0 48px',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
}

const paragraph = {
  color: '#525f7f',

  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
}

const button = {
  backgroundColor: '#0ea5e9',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
  padding: '10px',
}
