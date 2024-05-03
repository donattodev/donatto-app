import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { HtmlIcon } from '@/components/icons/html'
import { CssIcon } from '@/components/icons/css'
import { JsIcon } from '@/components/icons/js'
import { NextIcon } from '@/components/icons/next'

import cupons from '@/assets/cover/cupons-cover.png'
import music from '@/assets/cover/music-relax-cover.png'
import reprogramando from '@/assets/cover/reprogramando.png'

import { SpotifyIcon } from '@/components/icons/spotofy-icon'
import { YoutubIcon } from '@/components/icons/youtube-icon'
import { GithubIcon } from '@/components/icons/github'
import { Footer } from '@/elements/footer'

export default function Home() {
  return (
    <>
      <header className="px-56 py-56 max-xl:px-28 max-md:px-16 max-sm:px-6 max-sm:pb-28 max-sm:pt-48">
        <h1 className="animate-left font-headline text-6xl font-black">
          Felippe Donatto
        </h1>

        <div className="pb-4 pt-2">
          <h2 className="animate-left">
            Desenvolvedor{' '}
            <span className="font-bold text-primary">Front End</span>
          </h2>
          <p className="animate-left font-medium text-zinc-400">
            Transformando sonhos em aplicações!
          </p>
        </div>

        <ul className="flex items-center gap-4">
          <li>
            <HtmlIcon className="animate-down w-6" />
          </li>
          <li>
            <CssIcon className="animate-down w-6" />
          </li>
          <li>
            <JsIcon className="animate-down w-6" />
          </li>
          <li>
            <NextIcon className="animate-down w-6" />
          </li>
        </ul>
      </header>

      <section className="flex flex-col items-center justify-center gap-8 pb-24">
        <div className="grid grid-cols-3 gap-2 px-56 max-xl:px-28 max-lg:grid-cols-2 max-lg:px-16 max-sm:grid-cols-1 max-sm:px-6">
          <div className="animate-down flex w-full flex-col gap-3 max-sm:items-center">
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

          <div className="animate-down flex w-full flex-col gap-3 max-sm:items-center">
            <figure className="relative">
              <Image
                src={cupons}
                alt=""
                className="w-full rounded-xl border-4 border-zinc-800/40"
              />
              <figcaption className="absolute top-0 h-full w-full rounded-xl bg-black/80 p-6 opacity-0 transition-all hover:opacity-100">
                <div className="absolute bottom-4 flex flex-col gap-3">
                  <h2 className="text-sm font-semibold uppercase text-zinc-300 max-sm:text-xs">
                    App de cupons de empresas locais.
                  </h2>

                  <ul className=" flex items-center gap-4 text-sm font-bold uppercase text-zinc-400">
                    <li className="transition-all hover:text-primary">
                      <Link
                        href="https://cupons-pi.vercel.app/"
                        target="_blank"
                      >
                        Projeto
                      </Link>
                    </li>
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
          <Link href="/projetos" className="min-w-40">
            ver mais
          </Link>
        </Button>
      </section>

      <section className="my-28 grid grid-cols-2 items-center bg-zinc-800 px-56 py-24 max-xl:px-28 max-lg:px-16 max-sm:grid-cols-1 max-sm:gap-6 max-sm:px-6">
        <div className="flex w-full flex-col gap-32  max-sm:gap-4">
          <div>
            <h2 className="animate-left font-title mb-6 text-2xl font-bold uppercase">
              Projeto de destaque
            </h2>
            <h3 className="animate-left text-sm font-light">
              Desenvolver esse projeto foi uma esperiencia fantastica. Pois alem
              de colocar a prova meus conhecimentos como development eu usei
              meus conhecimentos de mais de 20 anos como musicista para dar um
              toque espeical.
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            <ul className="animate-down flex items-center gap-3">
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

        <div className="animate-rigth">
          <Link href="https://music-relax.vercel.app/" target="_blank">
            <figure className="relative overflow-hidden">
              <Image
                src={music}
                alt=""
                className="w-full rounded-xl"
                quality={100}
              />
              <figcaption className="absolute top-0 h-full w-full cursor-pointer  rounded-xl bg-black/40 p-6 opacity-0 transition-all hover:opacity-100">
                <h2 className="absolute bottom-4 text-sm font-semibold uppercase text-zinc-300">
                  Music Relax - Criado por{' '}
                  <span className="text-primary">Donatto Dev</span>
                </h2>
              </figcaption>
            </figure>
          </Link>
        </div>
      </section>

      <section className="my-28 px-56 max-xl:px-28 max-lg:px-16 max-sm:px-6">
        <h2 className="animate-left mb-4 text-xl font-bold uppercase max-sm:pb-6">
          Eventos
        </h2>

        <div className="grid grid-cols-2 items-center gap-4 max-sm:grid-cols-1">
          <div className="animate-left w-full ">
            <Image src={reprogramando} alt="" />
          </div>

          <div className="animate-rigth flex w-full flex-col">
            <div>
              <hgroup className="mb-12 flex flex-col gap-1">
                <h2 className="font-title text-2xl font-bold uppercase">
                  Reprogramando
                </h2>
                <h3 className="font-bold uppercase text-zinc-500">Workaula</h3>
              </hgroup>
              <p className="mb-2 text-sm font-light">
                O primeiro site que eu fiz foi o Google Glass, desenvolvido no
                curso de{' '}
                <span className="font-bold text-primary">HTML e CSS</span> do{' '}
                <span className="font-bold text-primary">CURSO EM VÍDEO</span>,
                então resolvir reprograma-lo e gravar isso em uma aula gratuita
                pra vocês.
              </p>
              <p className="mb-2 text-sm font-light">
                Claro que usei novas metodologias e maneiras de se fazer, porem
                todos os ensinamentos do{' '}
                <span className="font-bold text-primary">
                  {' '}
                  Professor Gustavo Guanabara{' '}
                </span>
                são validos até hoje.
              </p>
            </div>

            <Button className="self-start">Ir para evento</Button>
          </div>
        </div>
      </section>

      <Footer.Root>
        <Footer.Field>
          <Footer.Branding />
          <Footer.Area />
        </Footer.Field>
        <Footer.Base />
      </Footer.Root>
    </>
  )
}
