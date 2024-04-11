import Link from 'next/link'

export function ProjetosPrivate() {
  return (
    <>
      <span className="font-title font-black">Private</span>
      <li className="pl-2 text-zinc-400 ">
        <span className="hover:text-primary50 transition-all">
          <Link href="https://bioterapyoficial.com" target="_blank">
            Bioterapy - Site institucional
          </Link>
        </span>
      </li>

      <li className="pl-2 text-zinc-400 ">
        <span className="hover:text-primary50 transition-all">
          <Link
            href="https://bioterapyoficial.com/curso-de-ozonioterapia/"
            target="_blank"
          >
            Bioterapy - Landing Page
          </Link>
        </span>
      </li>

      <li className="pl-2 text-zinc-400 ">
        <span className="hover:text-primary50 transition-all">
          <Link href="https://perolas-de-cristo.vercel.app/" target="_blank">
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
    </>
  )
}
