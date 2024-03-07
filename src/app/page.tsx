import Image from 'next/image'

import share from '../../public/share.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HtmlIcon } from '@/components/icons/html'
import { CssIcon } from '@/components/icons/css'
import { JsIcon } from '@/components/icons/js'
import { MailIcon } from '@/components/icons/mail'
import { InstagramIcon } from '@/components/icons/instagram'
import { GithubIcon } from '@/components/icons/github'
import { BehanceIcon } from '@/components/icons/behance'

export default function Home() {
  return (
    <main className="px-80 max-lg:px-16 max-sm:px-6">
      <header className="mb-64 mt-72">
        <hgroup className="flex flex-col gap-4">
          <h1 className="font-title text-5xl font-bold">Felippe Donatto</h1>

          <div>
            <h2 className="font-light">
              Desenvoledor{' '}
              <span className="text-primary text-primary50 underline underline-offset-4">
                Front end
              </span>
            </h2>
            <p className="mt-1 font-semibold text-zinc-200">
              Transformando <span className="text-primary50">sonhos</span> em
              aplicações!
            </p>
          </div>

          <div>
            <ul className="flex items-center gap-4">
              <li>
                <HtmlIcon className="w-6" fill="#71717a" />
              </li>
              <li>
                <CssIcon className="w-6" fill="#71717a" />
              </li>
              <li>
                <JsIcon className="w-6" fill="#71717a" />
              </li>
            </ul>
          </div>
        </hgroup>
      </header>

      <section className="my-16 flex w-full flex-col items-center gap-12">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex max-w-[284px] flex-col gap-4">
            <Image src={share} alt="" />

            <div>
              <h2 className="text-2xl font-bold">&quot;Clone&quot; Uber</h2>
              <span className="mb-4 flex text-sm uppercase text-primary50/60">
                Next Js, Shadcn Ui
              </span>

              <p className="text-sm font-light tracking-widest">
                Veja o &quot;Clone&quot; e aproveite para ver as novidades que
                fiz da home do Uber.
              </p>
            </div>
          </div>

          <div className="flex max-w-[284px] flex-col gap-4">
            <Image src={share} alt="" />

            <div>
              <h2 className="text-2xl font-bold">Music App</h2>
              <span className="mb-4 flex text-sm uppercase text-primary50/60">
                UI, Ux, Next Js, Shadcn Ui
              </span>

              <p className="text-sm font-light tracking-widest">
                Crie meu proprio stream de music. Venha conferir.
              </p>
            </div>
          </div>

          <div className="flex max-w-[284px] flex-col gap-4">
            <Image src={share} alt="" />

            <div>
              <h2 className="text-2xl font-bold">Tailwind Components</h2>
              <span className="mb-4 flex text-sm uppercase text-primary50/60">
                HTML, CSS, Tailwind Css
              </span>

              <p className="text-sm font-light tracking-widest">
                Inspirado no Shadcn Ui estou desenvolvendo components.
              </p>
            </div>
          </div>
        </div>

        <Button asChild variant={'outline'}>
          <Link href="/">ver mais</Link>
        </Button>
      </section>

      <footer className="absolute left-0 flex w-full items-center justify-between bg-zinc-900 px-64 py-10 max-lg:px-16 max-sm:flex-col max-sm:gap-6 max-sm:px-6">
        <div className="flex w-full max-w-xs flex-col gap-1">
          <h2 className="mb-2 text-2xl font-bold uppercase text-primary">
            Obrigado pela visita
          </h2>
          <span className="text-sm font-light text-zinc-200">
            A melhor experiencia no site é melhor visualizado no desktop.
          </span>
          <span className="text-sm font-light text-zinc-200">
            Programação por amor! &copy;{' '}
            <span className="font-bold uppercase text-primary50">
              Felippe Donatto
            </span>
          </span>
        </div>

        <ul className="flex items-center gap-6 text-sm uppercase text-zinc-300">
          <li>
            <Link
              href="mailto:donattodev@gmail.com"
              target="_blank"
              className="transition-all hover:text-primary50"
            >
              <MailIcon className="w-5 sm:hidden" fill="#71717a" />
              <span className="max-sm:hidden">E-mail</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.behance.net/felippedon8296"
              target="_blank"
              className="transition-all hover:text-primary50"
            >
              <BehanceIcon className="w-5 sm:hidden" fill="#71717a" />
              <span className="max-sm:hidden">Behance</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/donattodev"
              target="_blank"
              className="transition-all hover:text-primary50"
            >
              <GithubIcon className="w-5 sm:hidden" fill="#71717a" />
              <span className="max-sm:hidden">Github</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/donattodev_"
              target="_blank"
              className="transition-all hover:text-primary50"
            >
              <InstagramIcon className="w-5 sm:hidden" fill="#71717a" />
              <span className="max-sm:hidden">Instagram</span>
            </Link>
          </li>
        </ul>
      </footer>
    </main>
  )
}
