import Link from 'next/link'

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
        <Link
          href="/"
          className="text-xs font-bold uppercase text-zinc-300 transition-all hover:bg-zinc-900"
        >
          <li className="flex flex-col items-start rounded-md border-2 border-zinc-500/40 p-6">
            <span className="text-xl font-bold uppercase">
              <Link href="/" target="_blank">
                Tailwind CSS: Inovação no Presente, Rumo ao Futuro
              </Link>
            </span>
            <span className="mb-1 mt-3 w-full max-w-md truncate text-sm text-zinc-700">
              No cenário dinâmico do desenvolvimento web, o Tailwind CSS
              surge...
            </span>

            <ul className="flex items-center gap-2 ">
              <li className="text-xs font-bold uppercase text-sky-300 ">
                Tailwind CSS -{' '}
              </li>
              <li className="text-xs font-bold uppercase text-sky-300 ">
                Front end
              </li>
            </ul>
          </li>
        </Link>

        <Link
          href="/"
          className="text-xs font-bold uppercase text-zinc-300 transition-all hover:bg-zinc-900"
        >
          <li className="flex flex-col items-start rounded-md border-2 border-zinc-500/40 p-6">
            <span className="text-xl font-bold uppercase">
              <Link href="/" target="_blank">
                O Futuro da Programação em 2024: A Era das Inteligências
                Artificiais
              </Link>
            </span>
            <span className="mb-1 mt-3 w-full max-w-md truncate text-sm text-zinc-700">
              À medida que nos aproximamos de 2024, vislumbramos uma revolução
              empolgante no campo da programação impulsionada pelos avanços das
              Inteligências Artificiais (IAs).
            </span>

            <ul className="flex items-center gap-2 ">
              <li className="text-xs font-bold uppercase text-sky-300 ">
                IA -{' '}
              </li>
              <li className="text-xs font-bold uppercase text-sky-300 ">
                Tecnologia
              </li>
            </ul>
          </li>
        </Link>
      </ul>
    </div>
  )
}
