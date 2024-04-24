import { HeaderHome } from '@/elements/@pages/home/header'
import { ProjetosHome } from '@/elements/@pages/home/projetos'
import { DestaqueProjeto } from '@/elements/@pages/home/destaque'
import { EventoDestaque } from '@/elements/@pages/home/evento-destaque'
import { Footer } from '@/elements/footer'

export default function Home() {
  return (
    <>
      <HeaderHome />
      <ProjetosHome />
      <DestaqueProjeto />
      <EventoDestaque />
      <Footer.Root>
        <Footer.Field>
          <Footer.Branding />
          <Footer.Area />
          <Footer.Form />
        </Footer.Field>
        <Footer.Base />
      </Footer.Root>
    </>
  )
}
