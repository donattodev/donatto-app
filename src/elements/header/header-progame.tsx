import { Button } from '@/components/ui/button'

export function HeaderProgame() {
  return (
    <section className="max-sm:bg-progameMobile min-h-screen w-full bg-zinc-900 bg-progame bg-cover">
      <header className="box flex h-screen items-center max-sm:flex-col max-sm:py-32">
        <div className="flex max-w-md flex-col gap-6">
          <h2 className="font-bold tracking-wider text-zinc-300 max-sm:text-center">
            PORQUE APRENDER PODE SER BRINCANDO!
          </h2>
          <h1 className="font-headline text-7xl font-black text-primary max-sm:text-center max-sm:text-5xl">
            O FUTURO É PROGRAMAR!
          </h1>
          <p className="max-w-md text-sm font-semibold uppercase tracking-wider text-zinc-300">
            Progame ensinando o seu filho uma profissão criando games de maneira
            simples e fácil.
          </p>

          <div className="flex gap-4 max-sm:flex-col">
            <Button>Fale com o professor</Button>
            <Button
              variant={'outline'}
              className="border-2 border-primary bg-transparent"
            >
              Matricule-se agora
            </Button>
          </div>
        </div>
        <div />
      </header>
    </section>
  )
}
