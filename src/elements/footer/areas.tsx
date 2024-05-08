import Link from 'next/link'

export function Area() {
  return (
    <>
      <div className="col-span-1 flex flex-col gap-4">
        <h2 className="animate-left text-sm font-bold uppercase">
          Links Rápidos
        </h2>

        <ul className="flex flex-col gap-2 font-sans text-sm font-semibold text-zinc-400">
          <li className="animate-left transition-all hover:text-zinc-50">
            <Link href="/">Home</Link>
          </li>
          <li className="animate-left transition-all hover:text-zinc-50">
            <Link href="/projetos">Projetos</Link>
          </li>
          <li className="animate-left transition-all hover:text-zinc-50">
            <Link href="/sobre">Sobre</Link>
          </li>
          <li className="animate-left transition-all hover:text-zinc-50">
            <Link href="https://blog.donattodev.com.br" target="_blank">
              Artigos
            </Link>
          </li>
          <li className="animate-left transition-all hover:text-zinc-50">
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </div>

      <div className="col-span-1 flex flex-col gap-4">
        <h2 className="animate-left text-sm font-bold uppercase">LGPD</h2>

        <ul className="flex flex-col gap-2 font-sans text-sm font-semibold text-zinc-400">
          <li className="animate-left transition-all hover:text-zinc-50">
            <Link href="/politica-privacidade">Politicas e privacidade</Link>
          </li>
          <li className="animate-left transition-all hover:text-zinc-50">
            <Link href="/atendimento-lgpd">Atenidmento LGPD</Link>
          </li>
        </ul>
      </div>

      <div className="col-span-1 flex flex-col gap-4">
        <h2 className="animate-left text-sm font-bold uppercase">Cursos</h2>

        <ul className="flex flex-col gap-2 font-sans text-sm font-semibold text-zinc-400">
          <li className="animate-left transition-all hover:text-zinc-50">
            <Link href="/progame">Progame</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
