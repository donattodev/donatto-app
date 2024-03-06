import Link from 'next/link'
import Image from 'next/image'

export default function Articles() {
  return (
    <div className="mb-16 mt-32 flex flex-col items-start justify-center gap-4 px-80 max-lg:px-16 max-sm:px-6">
      <div className="flex flex-wrap items-center justify-start gap-4">
        <Link
          href="https://vivacious-forest-947.notion.site/Tailwind-CSS-Inova-o-no-Presente-Rumo-ao-Futuro-77c832f3834241d4899816d70d229d6c"
          target="_blank"
          className="flex max-w-md items-center gap-4 rounded-md border-2 border-zinc-500/40 p-4 transition-all hover:bg-zinc-900 max-lg:w-full  max-sm:w-full max-sm:flex-col max-sm:items-start"
        >
          <Image
            src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800"
            width={850}
            height={60}
            alt=""
            className="size-36 rounded-md max-sm:aspect-video max-sm:size-auto"
          />

          <div>
            <h2 className="text-lg font-bold uppercase">
              Tailwind CSS: Inovação no Presente, Rumo ao Futuro
            </h2>
          </div>
        </Link>

        <Link
          href="https://vivacious-forest-947.notion.site/O-Futuro-da-Programa-o-em-2024-A-Era-das-Intelig-ncias-Artificiais-1c3c736378ca490e80545e5f23fb3e0d?pvs=74"
          target="_blank"
          className="flex max-w-md items-center gap-4 rounded-md border-2 border-zinc-500/40 p-4 transition-all hover:bg-zinc-900 max-lg:w-full  max-sm:w-full max-sm:flex-col max-sm:items-start"
        >
          <Image
            src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800"
            width={850}
            height={60}
            alt=""
            className="size-36 rounded-md max-sm:aspect-video max-sm:size-auto"
          />

          <div>
            <h2 className="text-lg font-bold uppercase">
              O Futuro da Programação em 2024: A Era das Inteligências
              Artificiais
            </h2>
          </div>
        </Link>
      </div>
    </div>
  )
}
