import Image from 'next/image'
import donatto from '@/assets/donatto.jpg'

export function HeaderSobre() {
  return (
    <header className="grid w-full grid-cols-6 gap-4 max-sm:grid-cols-1 max-sm:justify-center">
      <div className="col-span-2 max-sm:col-span-1">
        <Image src={donatto} alt="" width={540} className="rounded-xl" />
      </div>

      <div className="col-span-4 mt-12 flex flex-col gap-3 max-lg:mt-0 max-sm:col-span-1">
        <p className="text-justify">
          Olá, eu sou Felippe Donatto, sou desenvolvedor front-end com 10 anos
          de experiência. Apaixonado pela programação, ouso a criar minhas
          próprias APIs, explorando gradualmente o mundo do backend. Como
          entusiasta da arte, também me aventuro no design UI/UX, embora não
          seja um profissional de design, tenho conhecimentos em Figma.
        </p>

        <p className="text-justify">
          Desde os primórdios com HTML e CSS até as tecnologias atuais, como
          Typescript, Next.js, JavaScript e PHP, minha jornada reflete uma
          evolução constante na criação de experiências digitais impactantes.
        </p>

        <p className="text-justify">
          Hoje, estou envolvido no projeto de desenvolvimento do Lupaa e criando
          projetos pessoais para comunidade e clientes. Vamos juntos transformar
          ideias em realidade digital!
        </p>
      </div>
    </header>
  )
}
