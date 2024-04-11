import Link from 'next/link'

export function ProjetosOpenSource() {
  return (
    <>
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

      <li className="pl-2 text-zinc-400 ">
        <span className="hover:text-primary50 transition-all">
          <Link href="https://cupons-pi.vercel.app/" target="_blank">
            Cupons
          </Link>
        </span>
      </li>
    </>
  )
}
