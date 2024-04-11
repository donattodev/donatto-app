import Link from 'next/link'
import { Music } from 'lucide-react'

export function DestaqueListProjetos() {
  return (
    <div className="my-12 flex flex-col gap-3">
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
            <span className="text-xs font-light uppercase text-primary">
              Front End
            </span>
            <span className="text-xs font-light uppercase">
              Next Js, Tailwind, ShadcnUi, oAuth Google
            </span>
          </div>
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <Link href="https://cupons-pi.vercel.app/" target="_blank">
          <div className="flex cursor-pointer flex-col gap-4 rounded-md border p-4 transition-all hover:bg-zinc-900">
            <div className="flex items-center gap-3">
              <Music />
              <h2 className="text-lg font-bold">Cupons</h2>
            </div>
            <span className="text-xs font-light uppercase text-primary">
              Front End
            </span>
            <span className="text-xs font-light uppercase">
              Next Js, Tailwind, ShadcnUi, Geo Localização
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
