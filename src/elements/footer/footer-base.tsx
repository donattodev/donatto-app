export function FooterBase() {
  return (
    <footer className="flex flex-col items-center justify-center bg-zinc-900 p-6">
      <p className="text-sm font-bold text-zinc-400 max-sm:text-center">
        Copyright &#169; 2024 -{' '}
        <span className="text-sm font-bold uppercase text-primary">
          Donatto dev
        </span>{' '}
        - Todos os direitos reservados.
      </p>
    </footer>
  )
}
