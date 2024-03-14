import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { GithubIcon } from '@/components/icons/github'
import { YoutubIcon } from '@/components/icons/youtube-icon'
import { SpotifyIcon } from '@/components/icons/spotofy-icon'

import music from '../../../public/cover-project/cover-music-relax-big.png'

export function ProjectDestaqueHome() {
  return (
    <section className="my-28 flex h-[450px] items-center justify-center gap-8 bg-zinc-900 px-56 max-lg:px-16 max-sm:h-auto max-sm:flex-col max-sm:gap-4 max-sm:py-12">
      <div className="flex w-full flex-col gap-32 py-[100px] max-sm:gap-4">
        <div>
          <h2 className="mb-6 font-title text-2xl font-bold uppercase">
            Projeto de destaque
          </h2>
          <h3 className="text-sm font-light">
            Desenvolver esse projeto foi uma esperiencia fantastica. Pois alem
            de colocar a prova meus conhecimentos como development eu usei meus
            conhecimentos de mais de 20 anos como musicista para dar um toque
            espeical.
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          <ul className="flex items-center gap-3">
            <li>
              <Link
                href="https://github.com/donattodev/music-relax"
                target="_blank"
              >
                <GithubIcon className="w-5" fill="#71717a" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/channel/UC_Z85abD4Ka1FqtObzaiBbQ"
                target="_blank"
              >
                <YoutubIcon className="w-5" fill="#71717a" />
              </Link>
            </li>
            <li>
              <Link
                href="https://open.spotify.com/intl-pt/album/17VsdbGONVYMYrIxOemkP0"
                target="_blank"
              >
                <SpotifyIcon className="w-5" fill="#71717a" />
              </Link>
            </li>
            <li>
              <Button asChild className="w-full">
                <Link href="https://music-relax.vercel.app/" target="_blank">
                  Ver projeto
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full">
        <Link href="https://music-relax.vercel.app/" target="_blank">
          <figure className="relative">
            <Image src={music} alt="" className="rounded-xl" />
            <figcaption className="absolute top-0 h-full w-full cursor-pointer rounded-xl bg-black/40 p-6 opacity-0 transition-all hover:opacity-100">
              <h2 className="font-bold uppercase text-primary">Music Relax</h2>
              <h2 className="text-sm font-bold uppercase">
                Criado por Donatto Dev
              </h2>
            </figcaption>
          </figure>
        </Link>
      </div>
    </section>
  )
}
