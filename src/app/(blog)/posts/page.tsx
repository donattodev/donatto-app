import Link from 'next/link'

export default function Articles() {
  return (
    <div className="mb-16 mt-32 flex flex-col items-start justify-center gap-4 px-80 max-lg:px-16 max-sm:px-6">
      <div className="flex  items-center justify-start gap-4">
        <Link
          href="https://vivacious-forest-947.notion.site/Tailwind-CSS-Inova-o-no-Presente-Rumo-ao-Futuro-77c832f3834241d4899816d70d229d6c"
          target="_blank"
          className="flex w-full items-center gap-4 rounded-md border-2 border-zinc-500/20 p-4 transition-all hover:bg-zinc-900  max-sm:w-full max-sm:flex-col max-sm:items-start"
        >
          <div>
            <h2 className="text-lg font-bold uppercase">
              Tailwind CSS: Inovação no Presente, Rumo ao Futuro
            </h2>
            <span className="text-xs font-bold uppercase text-zinc-500">
              Tailwind Css, Css, front-end
            </span>
          </div>
        </Link>

        <Link
          href="https://vivacious-forest-947.notion.site/O-Futuro-da-Programa-o-em-2024-A-Era-das-Intelig-ncias-Artificiais-1c3c736378ca490e80545e5f23fb3e0d?pvs=74"
          target="_blank"
          className="flex w-full items-center gap-4 rounded-md border-2 border-zinc-500/20 p-4 transition-all hover:bg-zinc-900  max-sm:w-full max-sm:flex-col max-sm:items-start"
        >
          <div>
            <h2 className="text-lg font-bold uppercase">
              O Futuro da Programação em 2024: A Era das Inteligências
              Artificiais
            </h2>
            <span className="text-xs font-bold uppercase text-zinc-500">
              Programação, IA, Tecnologia, Inovação
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
