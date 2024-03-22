import Link from 'next/link'
import { Music } from 'lucide-react'
import { FooterBase } from '@/elements/footer/footer-base'

export default function ListaDeProjetos() {
  return (
    <>
      <div className="mb-16 mt-32 px-56 max-lg:px-16 max-sm:px-6">
        <div className="my-12 flex flex-col gap-6">
          <h2 className="font-black uppercase text-primary">
            Projetos em destaque
          </h2>

          <div className="flex flex-col gap-4">
            <Link href="https://music-relax.vercel.app/" target="_blank">
              <div className="flex cursor-pointer flex-col gap-4 rounded-md border p-4 transition-all hover:bg-zinc-900">
                <div className="flex items-center gap-3">
                  <Music />
                  <h2 className="text-lg font-bold">Music Relax</h2>
                </div>
                <span className="text-xs font-light uppercase">
                  Web app, music relax
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <ul className="flex flex-col gap-4">
            <span className="font-title font-black">Open Source</span>

            <li className="pl-2 text-zinc-400 ">
              <span className="hover:text-primary50 transition-all">
                <Link href="https://music-relax.vercel.app/" target="_blank">
                  Music Relax
                </Link>
              </span>

              <div className="flex items-center gap-2">
                <span>
                  <Link
                    href="https://docs.donattodev.com.br/instalation-music"
                    target="_blank"
                    className="hover:text-primary50 text-[10px] uppercase text-emerald-100  transition-all"
                  >
                    Docs
                  </Link>
                </span>
              </div>
            </li>

            <span className="font-title font-black">Private</span>

            <li className="pl-2 text-zinc-400 ">
              <span className="hover:text-primary50 transition-all">
                <Link href="https://bioterapyoficial.com" target="_blank">
                  Bioterapy
                </Link>
              </span>
            </li>

            <li className="pl-2 text-zinc-400 ">
              <span className="hover:text-primary50 transition-all">
                <Link
                  href="https://perolas-de-cristo.vercel.app/"
                  target="_blank"
                >
                  Pérolas de cristo
                </Link>
              </span>
            </li>

            <li className="pl-2 text-zinc-400 ">
              <span className="hover:text-primary50 transition-all">
                <Link href="https://trancaderaiz.com.br/" target="_blank">
                  Trança de Raiz
                </Link>
              </span>
            </li>

            <li className="pl-2 text-zinc-400 ">
              <span className="hover:text-primary50 transition-all">
                <Link href="https://www.auroravca.com.br/" target="_blank">
                  Aurora VCA
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <FooterBase />
    </>
  )
}
