import { Button } from '@/components/ui/button'

export function HeaderProgame() {
  return (
    <header className="flex w-full">
      <div className="flex min-h-screen w-full flex-col items-start justify-center gap-8 pl-56">
        <div className="flex flex-col items-start gap-6">
          <h2 className="animate-left font-bold tracking-wider text-zinc-300">
            PORQUE APRENDER PODE SER BRINCANDO!
          </h2>
          <h1 className="animate-left font-headline text-7xl font-black text-primary max-sm:text-5xl">
            O FUTURO É PROGRAMAR!
          </h1>
          <p className="animate-left max-w-md text-sm font-semibold uppercase tracking-wider text-zinc-300">
            Progame ensinando o seu filho uma profissão criando games de maneira
            simples e fácil.
          </p>
        </div>

        <div className="flex gap-4">
          <Button className="animate-left">Fale com o professor</Button>
          <Button
            variant={'outline'}
            className="animate-left border-2 border-primary bg-transparent"
          >
            Matricule-se agora
          </Button>
        </div>
      </div>
      <div className="min-h-screen w-full bg-progameMobile bg-cover" />
    </header>
  )
}
