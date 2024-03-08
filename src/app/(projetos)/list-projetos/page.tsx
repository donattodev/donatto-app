import { TailwindIcon } from '@/components/icons/tailwind'
import { Music } from 'lucide-react'
import Link from 'next/link'

export default function ListaDeProjetos() {
  return (
    <div className="mb-16 mt-32 px-80 max-lg:px-16 max-sm:px-6">
      <div className="my-12 flex flex-col gap-6">
        <h2 className="font-black uppercase text-primary">
          Projetos em destaque
        </h2>

        <div className="flex flex-col gap-4">
          <div className="flex cursor-pointer flex-col gap-4 rounded-md border p-4 transition-all hover:bg-zinc-900">
            <div className="flex items-center gap-3">
              <Music />
              <h2 className="text-lg font-bold">Music Relax</h2>
            </div>
            <span className="text-xs font-light uppercase">
              Web app, music relax
            </span>
          </div>

          <div className="flex cursor-pointer flex-col gap-4 rounded-md border p-4 transition-all hover:bg-zinc-900">
            <div className="flex items-center gap-3">
              <TailwindIcon className="w-6" fill="#FFF" />
              <h2 className="text-lg font-bold">Tailwind Components</h2>
            </div>
            <span className="text-xs font-light uppercase">
              Web app, music relax
            </span>
          </div>
        </div>
      </div>

      <div>
        <ul className="flex flex-col gap-4">
          <span className="font-title font-black">2024</span>

          <li className="pl-2 text-zinc-400 ">
            <span className="transition-all hover:text-primary50">
              <Link href="/" target="_blank">
                Music Relax
              </Link>
            </span>

            <div className="flex items-center gap-2">
              <span>
                <Link
                  href="/"
                  target="_blank"
                  className="text-[10px] uppercase text-emerald-100 transition-all  hover:text-primary50"
                >
                  Docs
                </Link>
              </span>
            </div>
          </li>

          <li className="pl-2 text-zinc-400 ">
            <span className="transition-all hover:text-primary50">
              <Link href="/" target="_blank">
                Api Music Relax
              </Link>
            </span>

            <div className="flex items-center gap-2">
              <span>
                <Link
                  href="/"
                  target="_blank"
                  className="text-[10px] uppercase text-emerald-100 transition-all  hover:text-primary50"
                >
                  Docs
                </Link>
              </span>
            </div>
          </li>

          <li className="pl-2 text-zinc-400 ">
            <span className="transition-all hover:text-primary50">
              <Link href="/" target="_blank">
                Tailwind Components
              </Link>
            </span>

            <div className="flex items-center gap-2">
              <span>
                <Link
                  href="/"
                  target="_blank"
                  className="text-[10px] uppercase text-emerald-100 transition-all  hover:text-primary50"
                >
                  Docs
                </Link>
              </span>
            </div>
          </li>

          <li className="pl-2 text-zinc-400 ">
            <span className="transition-all hover:text-primary50">
              <Link href="/" target="_blank">
                Pérolas de cristo
              </Link>
            </span>

            <div className="flex items-center gap-2">
              <span>
                <Link
                  href="/"
                  target="_blank"
                  className="text-[10px] uppercase text-emerald-100 transition-all hover:text-primary50"
                >
                  Docs
                </Link>
              </span>
            </div>
          </li>

          <span className="font-title font-black">2023</span>

          <li className="pl-2 text-zinc-400 ">
            <span className="transition-all hover:text-primary50">
              <Link href="https://trancaderaiz.com.br/" target="_blank">
                Trança de Raiz
              </Link>
            </span>
          </li>

          <li className="pl-2 text-zinc-400 ">
            <span className="transition-all hover:text-primary50">
              <Link href="https://www.auroravca.com.br/" target="_blank">
                Aurora VCA
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
