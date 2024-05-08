import { ButtonWhatsapp } from '../buttons/button-whatsapp'
import { ButtonMatricula } from '../buttons/button-matricula'

export function HeaderProgame() {
  return (
    <header className="flex bg-zinc-900">
      <div className="max-sm:bg-mobile flex min-h-screen w-full flex-col items-start justify-center gap-8 pl-56 max-xl:pl-16 max-sm:bg-cover max-sm:bg-no-repeat max-sm:px-6">
        <div className="flex flex-col items-start gap-6">
          <h2 className="animate-left font-bold tracking-wider text-zinc-300 max-sm:text-center">
            PORQUE APRENDER PODE SER BRINCANDO!
          </h2>
          <h1 className="animate-left font-headline text-7xl font-black text-primary max-xl:text-5xl max-sm:text-center">
            O FUTURO É PROGRAMAR!
          </h1>
          <p className="animate-left max-w-md text-sm font-semibold uppercase tracking-wider text-zinc-300 max-xl:max-w-sm max-sm:text-center">
            Progame ensinando o seu filho uma profissão criando games de maneira
            simples e fácil.
          </p>
        </div>

        <div className="flex gap-4 max-sm:w-full max-sm:flex-col">
          <ButtonWhatsapp />
          <ButtonMatricula />
        </div>
      </div>
      <div className="min-h-screen w-full bg-progame bg-right bg-no-repeat max-sm:hidden" />
    </header>
  )
}
