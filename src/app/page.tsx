import { HeaderHome } from '@/elements/home/header'
import { ProjectHome } from '@/elements/home/project'
import { EventosHome } from '@/elements/home/eventos'
import { ProjectDestaqueHome } from '@/elements/home/project-destaque'

export default function Home() {
  return (
    <main className="">
      <HeaderHome />
      <ProjectHome />
      <ProjectDestaqueHome />
      <EventosHome />
    </main>
  )
}
