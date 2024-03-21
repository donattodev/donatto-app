import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

import tailwind from '../../../public/cover-project/cover-tailwind-css.png'
import music from '../../../public/cover-project/cover-music-relax-small.png'
import aniamtion from '../../../public/cover-project/cover-animation-css.png'

export function ProjectHome() {
  return (
    <section className="flex w-full flex-col items-center gap-12">
      <div className="flex flex-wrap items-center justify-center gap-6 max-lg:gap-2 max-lg:px-4">
        <Link href="https://music-relax.vercel.app/" target="_blank">
          <div className="flex max-w-[364px] flex-col gap-4 max-lg:max-w-xs">
            <figure className="relative">
              <Image
                src={music}
                alt=""
                className="rounded-xl border-4 border-zinc-800/40"
              />
              <figcaption className="absolute top-0 h-full w-full cursor-pointer rounded-xl bg-black/60 p-6 opacity-0 transition-all hover:opacity-100">
                <h2 className="absolute bottom-4 text-sm font-semibold text-zinc-300 ">
                  Plataforma de música desenvolvida com auxilio de IAs.
                </h2>
              </figcaption>
            </figure>

            <div>
              <h2 className="text-2xl font-bold">Music Relax</h2>
              <span className="mb-4 flex text-xs font-bold uppercase text-primary">
                Next Js, Shadcn Ui
              </span>
            </div>
          </div>
        </Link>

        <div className="flex max-w-[364px] flex-col gap-4 max-lg:max-w-xs">
          <figure className="relative">
            <Image
              src={tailwind}
              alt=""
              className="rounded-xl border-4 border-zinc-800/40"
            />
            <figcaption className="absolute top-0 h-full w-full cursor-pointer rounded-xl bg-black/60 p-6 opacity-0 transition-all hover:opacity-100">
              <h2 className="absolute bottom-4 text-sm font-semibold text-zinc-300 ">
                Components HTML usando Tailwind Css como base
              </h2>
            </figcaption>
          </figure>

          <div>
            <h2 className="text-2xl font-bold">Tailwind Components</h2>
            <span className="mb-4 flex text-xs font-bold uppercase text-primary">
              HTML, CSS(tailwind css)
            </span>
          </div>
        </div>

        <div className="flex max-w-[364px] flex-col gap-4 max-lg:max-w-xs">
          <figure className="relative">
            <Image
              src={aniamtion}
              alt=""
              className="rounded-xl border-4 border-zinc-800/40"
            />
            <figcaption className="absolute top-0 h-full w-full cursor-pointer rounded-xl bg-black/60 p-6 opacity-0 transition-all hover:opacity-100">
              <h2 className="absolute bottom-4 text-sm font-semibold text-zinc-300 ">
                Plataforma de música desenvolvida com auxilio de IAs.
              </h2>
            </figcaption>
          </figure>
          <div>
            <h2 className="text-2xl font-bold">Cupons</h2>
            <span className="mb-4 flex text-xs font-bold uppercase text-primary">
              Next Js, Tailwind Css
            </span>
          </div>
        </div>
      </div>

      <Button asChild>
        <Link href="/list-projetos" className="min-w-40">
          ver mais
        </Link>
      </Button>
    </section>
  )
}
