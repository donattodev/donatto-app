import { Logo } from '@/components/logo/logo'

export function Branding() {
  return (
    <div className="col-span-1 flex flex-col gap-3">
      <Logo className="w-48" />
      <hgroup>
        <h4 className="mb-2 mt-6 font-sans text-xs font-bold uppercase">
          Transformando <span className="text-primary">sonhos</span> em
          aplicações!
        </h4>
        <p className="font-sans text-xs font-bold text-zinc-400">
          Todos os direitos reservados.
        </p>
      </hgroup>
    </div>
  )
}
