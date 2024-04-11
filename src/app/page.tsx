import { HeaderHome } from '@/elements/@pages/home/header'
import { ProjetosHome } from '@/elements/@pages/home/projetos'
import { DestaqueProjeto } from '@/elements/@pages/home/destaque'
import { EventoDestaque } from '@/elements/@pages/home/evento-destaque'
import { FooterBase } from '@/elements/footer/footer-base'

export default function Home() {
  return (
    <>
      <HeaderHome />
      <ProjetosHome />
      <DestaqueProjeto />
      <EventoDestaque />
      <FooterBase />
    </>
  )
}
