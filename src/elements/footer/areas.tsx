import Link from 'next/link'

export function Area() {
  return (
    <>
      <div className="col-span-1 flex flex-col gap-4">
        <h2 className="text-sm font-bold uppercase">Links Rápidos</h2>

        <ul className="flex flex-col gap-2 font-sans text-sm font-semibold text-zinc-400">
          <li className="transition-all hover:text-zinc-50">
            <Link href="/">Home</Link>
          </li>
          <li className="transition-all hover:text-zinc-50">
            <Link href="/">Projetos</Link>
          </li>
          <li className="transition-all hover:text-zinc-50">
            <Link href="/">Login</Link>
          </li>
          <li className="transition-all hover:text-zinc-50">
            <Link href="/">Serviços</Link>
          </li>
          <li className="transition-all hover:text-zinc-50">
            <Link href="/">Cursos</Link>
          </li>
        </ul>
      </div>

      <div className="col-span-1 flex flex-col gap-4">
        <h2 className="text-sm font-bold uppercase">LGPD</h2>

        <ul className="flex flex-col gap-2 font-sans text-sm font-semibold text-zinc-400">
          <li className="transition-all hover:text-zinc-50">
            <Link href="/">Politicas e privacidade</Link>
          </li>
          <li className="transition-all hover:text-zinc-50">
            <Link href="/">Termos e condições</Link>
          </li>
          <li className="transition-all hover:text-zinc-50">
            <Link href="/">Atendimento LGPD</Link>
          </li>
          <li className="transition-all hover:text-zinc-50">
            <Link href="/">Treinamento LGPD</Link>
          </li>
          <li className="transition-all hover:text-zinc-50">
            <Link href="/">Configruação de Permissões</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
