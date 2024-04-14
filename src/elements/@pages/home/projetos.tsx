import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

import cupons from '@/assets/cover/cover-cupons.png'
import music from '@/assets/cover/cover-music-relax-small.png'

export function ProjetosHome() {
  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <div className="grid grid-cols-3 gap-2 px-56 max-lg:grid-cols-2 max-lg:px-16 max-sm:grid-cols-1 max-sm:px-6">
        <div className="flex w-full flex-col gap-3 max-sm:items-center">
          <figure className="relative">
            <Image
              src={music}
              alt=""
              className="w-full rounded-xl border-4 border-zinc-800/40"
            />
            <figcaption className="absolute top-0 h-full w-full rounded-xl bg-black/80 p-6 opacity-0 transition-all hover:opacity-100">
              <div className="absolute bottom-4 flex flex-col gap-3">
                <h2 className="text-sm font-semibold uppercase text-zinc-300 max-sm:text-xs">
                  Plataforma de música desenvolvida com auxilio de IAs.
                </h2>

                <ul className=" flex items-center gap-4 text-sm font-bold uppercase text-zinc-400">
                  <li className="transition-all hover:text-primary">
                    <Link
                      href="https://music-relax.vercel.app/"
                      target="_blank"
                    >
                      Projeto
                    </Link>
                  </li>
                  <li className="transition-all hover:text-primary">
                    <Link
                      href="https://docs.donattodev.com.br/instalation-music"
                      target="_blank"
                    >
                      Documentação
                    </Link>
                  </li>
                  <li className="transition-all hover:text-primary">
                    <Link
                      href="https://github.com/donattodev/music-relax"
                      target="_blank"
                    >
                      Github
                    </Link>
                  </li>
                </ul>
              </div>
            </figcaption>
          </figure>

          <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
            <h2 className="text-lg font-bold uppercase">Music Relax</h2>
            <span className="mb-4 flex text-xs font-bold text-primary">
              Next Js, Shadcn Ui
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 max-sm:items-center">
          <figure className="relative">
            <Image
              src={cupons}
              alt=""
              className="rounded-xl border-4 border-zinc-800/40"
            />
            <figcaption className="absolute top-0 h-full w-full rounded-xl bg-black/80 p-6 opacity-0 transition-all hover:opacity-100">
              <div className="absolute bottom-4 flex flex-col gap-3">
                <h2 className="text-sm font-semibold uppercase text-zinc-300 max-sm:text-xs">
                  App de cupons de empresas locais.
                </h2>

                <ul className=" flex items-center gap-4 text-sm font-bold uppercase text-zinc-400">
                  <li className="transition-all hover:text-primary">
                    <Link href="https://cupons-pi.vercel.app/" target="_blank">
                      Projeto
                    </Link>
                  </li>
                  {/* <li className="transition-all hover:text-primary">
                    <Link href="#" target="_blank">
                      Documentação
                    </Link>
                  </li> */}
                  <li className="transition-all hover:text-primary">
                    <Link
                      href="https://github.com/donattodev/cupons"
                      target="_blank"
                    >
                      Github
                    </Link>
                  </li>
                </ul>
              </div>
            </figcaption>
          </figure>
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
            <h2 className="text-lg font-bold uppercase">Cupons</h2>
            <span className="mb-4 flex text-xs font-bold text-primary">
              Next Js, Tailwind Css
            </span>
          </div>
        </div>
      </div>

      <Button asChild className="self-center border">
        <Link href="/list-projetos" className="min-w-40">
          ver mais
        </Link>
      </Button>
    </section>
  )
}
