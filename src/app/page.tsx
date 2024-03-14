import { HeaderHome } from '@/elements/home/header'
import { ProjectHome } from '@/elements/home/project'
import { EventosHome } from '@/elements/home/eventos'
import { FooterBase } from '@/elements/footer/footer-base'
import { ProjectDestaqueHome } from '@/elements/home/project-destaque'

export default function Home() {
  return (
    <main>
      <HeaderHome />
      <ProjectHome />
      <ProjectDestaqueHome />
      <EventosHome />
      <FooterBase />
    </main>
  )
}
