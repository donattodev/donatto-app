import { ArtigoContainer } from '@/elements/artigos/artigo-container'

export default function Artigos() {
  return (
    <div className="px-56 py-28 max-lg:px-16 max-sm:px-6">
      <div className="flex flex-col items-start justify-center rounded-md border-2 p-6 opacity-25">
        <h2 className="text-2xl font-black uppercase">
          Códigos, conexões e guerra.
        </h2>
        <span className="mt-1 text-xs font-bold uppercase text-zinc-500">
          A Fascinante Jornada da Internet e o Pioneirismo do HTML!
        </span>

        <span>Em desenvolvimento</span>
      </div>

      <ul className="mt-12 flex flex-col gap-4">
        <ArtigoContainer
          title="Tailwind CSS: Inovação no Presente, Rumo ao Futuro"
          description=" No cenário dinâmico do desenvolvimento web, o Tailwind CSS
          surge..."
          href={
            'https://vivacious-forest-947.notion.site/Tailwind-CSS-Inova-o-no-Presente-Rumo-ao-Futuro-77c832f3834241d4899816d70d229d6c?pvs=74'
          }
          tags="Tailwind CSS -  Front end"
          target="_blank"
        />

        <ArtigoContainer
          title="O Futuro da Programação em 2024: A Era das Inteligências
          Artificiais"
          description=" À medida que nos aproximamos de 2024, vislumbramos uma"
          href={
            'https://vivacious-forest-947.notion.site/O-Futuro-da-Programa-o-em-2024-A-Era-das-Intelig-ncias-Artificiais-1c3c736378ca490e80545e5f23fb3e0d?pvs=74'
          }
          tags="IA -  Tecnologia"
          target="_blank"
        />

        <ArtigoContainer
          title="CSS-in-JS: Transformando a Forma como Estilizamos Aplicações Web"
          description="O CSS-in-JS é uma abordagem revolucionária para lidar"
          href={
            'https://vivacious-forest-947.notion.site/CSS-in-JS-Transformando-a-Forma-como-Estilizamos-Aplica-es-Web-4681a2322b504b0d9e3ef4a73f3cd6e3'
          }
          tags="javascript - CSS"
          target="_blank"
        />
      </ul>
    </div>
  )
}
