import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import music from '../../../public/cover-project/cover-music-relax-small.png'
import tailwind from '../../../public/cover-project/cover-tailwind-css.png'
import aniamtion from '../../../public/cover-project/cover-animation-css.png'

export function ProjectHome() {
  return (
    <section className="flex w-full flex-col items-center gap-12">
      <div className="flex flex-wrap items-center justify-center gap-6 max-lg:gap-2 max-lg:px-4">
        <div className="flex max-w-[364px] flex-col gap-4 max-lg:max-w-xs">
          <Image
            src={music}
            alt=""
            className="rounded-md border-4 border-zinc-800/40"
          />

          <div>
            <h2 className="text-2xl font-bold">Music Relax</h2>
            <span className="mb-4 flex text-xs font-bold uppercase text-primary">
              Next Js, Shadcn Ui
            </span>
          </div>
        </div>

        <div className="flex max-w-[364px] flex-col gap-4 max-lg:max-w-xs">
          <Image
            src={tailwind}
            alt=""
            className="rounded-md border-4 border-zinc-800/40"
          />

          <div>
            <h2 className="text-2xl font-bold">Tailwind Components</h2>
            <span className="mb-4 flex text-xs font-bold uppercase text-primary">
              Next Js, Tailwind Css
            </span>
          </div>
        </div>

        <div className="flex max-w-[364px] flex-col gap-4 max-lg:max-w-xs">
          <Image
            src={aniamtion}
            alt=""
            className="rounded-md border-4 border-zinc-800/40"
          />

          <div>
            <h2 className="text-2xl font-bold">Animation Css</h2>
            <span className="mb-4 flex text-xs font-bold uppercase text-primary">
              Next Js, Shadcn Ui
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
