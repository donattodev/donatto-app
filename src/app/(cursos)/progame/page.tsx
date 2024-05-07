import { HeaderProgame } from '@/elements/header/header-progame'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import {
  Gamepad2,
  Gift,
  GraduationCap,
  LibraryBig,
  PersonStanding,
  Play,
} from 'lucide-react'

export default function Progame() {
  return (
    <>
      <HeaderProgame />

      <main className="py-10">
        <section className="box flex flex-col items-center gap-16 py-16">
          <div className="flex flex-col items-center  gap-1">
            <h2 className="animate-down text-4xl font-bold uppercase max-sm:text-center">
              O QUE TEM NO <span className="text-primary">PROGAME </span>?
            </h2>
            <p className="animate-down max-w-xs text-center text-sm font-semibold text-zinc-300">
              DESCUBRA TODOS OS NOSSOS RECURSOS E OPÇÕES DE CURSOS
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 ">
            <div className="animate-left flex w-full max-w-[365px] flex-col justify-center gap-4 rounded-md border-2 border-zinc-500/40 bg-zinc-900 px-6 py-4 max-xl:max-w-sm">
              <div className="flex items-center gap-3 uppercase">
                <Play className="size-8 text-primary" />
                <span className="font-bold">Mais de 90 aulas</span>
              </div>
              <p className="text-justify text-sm  text-zinc-300">
                O curso oferece mais de 48 aulas divididas em 6 módulos, além de
                48 plantões de dúvidas com mais de 2 horas de duração cada,
                todas aovivo e ficam gravadas para acesso posterior.
              </p>
            </div>

            <div className="animate-left flex w-full max-w-[365px] flex-col justify-center gap-4 rounded-md border-2 border-zinc-500/40 bg-zinc-900 px-6 py-4 max-xl:max-w-sm">
              <div className="flex items-center gap-3 uppercase">
                <Gamepad2 className="size-8 text-primary" />
                <span className="font-bold">4 projetos</span>
              </div>
              <p className="text-justify text-sm tracking-wider text-zinc-300">
                Durante o curso, desenvolveremos 4 projetos completos: um blog,
                uma documentação, um jogo do Dino e um jogo de quiz. Fora os
                desafios e exercicios
              </p>
            </div>

            <div className="animate-left flex w-full max-w-[365px] flex-col justify-center gap-4 rounded-md border-2 border-zinc-500/40 bg-zinc-900 px-6 py-4 max-xl:max-w-sm">
              <div className="flex items-center gap-3 uppercase">
                <PersonStanding className="size-8 text-primary" />
                <span className="font-bold">+ de 20 Exercicios</span>
              </div>
              <p className="text-justify text-sm tracking-wider text-zinc-300">
                Com mais de 20 exercícios práticos, os alunos irão desenvolver
                elementos utilizados em diversos sites, ampliando seu repertório
                de componentes.
              </p>
            </div>

            <div className="animate-left flex w-full max-w-[365px] flex-col justify-center gap-4 rounded-md border-2 border-zinc-500/40 bg-zinc-900 px-6 py-4 max-xl:max-w-sm">
              <div className="flex items-center gap-3 uppercase">
                <LibraryBig className="size-8 text-primary" />
                <span className="font-bold">Material complementar</span>
              </div>
              <p className="text-justify text-sm tracking-wider text-zinc-300">
                O aluno receberá gratuitamente um material complementar, que
                inclui exercícios extras, aulas e desafios para aprimorar seus
                conhecimentos.
              </p>
            </div>

            <div className="animate-left flex w-full max-w-[365px] flex-col justify-center gap-4 rounded-md border-2 border-zinc-500/40 bg-zinc-900 px-6 py-4 max-xl:max-w-sm">
              <div className="flex items-center gap-3 uppercase">
                <GraduationCap className="size-8 text-primary" />
                <span className="font-bold">Modalidades</span>
              </div>
              <p className="text-justify text-sm tracking-wider text-zinc-300">
                Oferecemos a opção de aulas presenciais (apenas em Vitória da
                Conquista) ou online. Na modalidade online, é possível
                participar em grupo.
              </p>
            </div>

            <div className="animate-left flex w-full max-w-[365px] flex-col justify-center gap-4 rounded-md border-2 border-zinc-500/40 bg-zinc-900 px-6 py-4 max-xl:max-w-sm">
              <div className="flex items-center gap-3 uppercase">
                <Gift className="size-8 text-primary" />
                <span className="font-bold">Bonus</span>
              </div>
              <p className="text-justify text-sm tracking-wider text-zinc-300">
                Como bônus de lançamento, estou disponibilizando um mini curso
                extra para a criação de um projeto incrível que irá ajudar na
                continuidade dos estudos.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center gap-16 py-16">
          <div className="flex flex-col items-center gap-1 max-sm:text-center">
            <h2 className="animate-down text-4xl font-bold uppercase">
              Todo o <span className="text-primary">conteúdo </span> do PROGAME
            </h2>
            <p className="animate-down text-center text-sm font-semibold uppercase text-zinc-300 max-sm:px-10">
              Descruba o caminho para vencer esse jogo!
            </p>
          </div>

          <div className="animate-down w-full max-w-4xl max-sm:px-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Mundo 01 - O inicio da jornada Descrobrindo o HTML
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-2 font-semibold uppercase text-zinc-400">
                    <li>Primeiras TAGS</li>
                    <li>Estrutura semantica</li>
                    <li>Listas ordenadas e não ordenadas</li>
                    <li>Paragrafos e titulos</li>
                    <li>Formatação de texto e simbolos</li>
                    <li>Imagens, videos e audios</li>
                    <li>Tags complementares e primerias codigos com css</li>
                    <li>Estilos globais e arquivos separados</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Mundo 02 - Construindo o primeiro projeto.
                </AccordionTrigger>
                <AccordionContent>Conteudo</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Mundo 03 - A magia do Css</AccordionTrigger>
                <AccordionContent>Conteudo</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Mundo 04 - Cosntuindo a sua fortaleza!
                </AccordionTrigger>
                <AccordionContent>Conteudo</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Mundo 05 - Javascript o seu grande aliado
                </AccordionTrigger>
                <AccordionContent>Conteudo</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Mundo 06 - A grande batalha!
                </AccordionTrigger>
                <AccordionContent>Conteudo</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="box flex flex-col items-center gap-16 bg-zinc-900 pb-24 pt-16">
          <div className="flex flex-col items-center gap-1">
            <h2 className="animate-down text-4xl font-bold uppercase text-primary">
              Projetos
            </h2>
            <p className="animate-down text-center text-sm font-semibold uppercase text-zinc-300">
              Conheça os nossos desafios
            </p>
          </div>

          <div className="animate-down flex w-full justify-center gap-4  max-sm:flex-col">
            <div className="flex w-full flex-col items-center gap-2">
              <div className="aspect-video w-full animate-pulse rounded-md border-2 border-zinc-500/40 bg-zinc-950" />
              <span className="font-bold uppercase">Blog</span>
            </div>

            <div className="flex w-full flex-col items-center gap-2">
              <div className="aspect-video w-full animate-pulse rounded-md border-2 border-zinc-500/40 bg-zinc-950" />
              <span className="font-bold uppercase">Documentação</span>
            </div>

            <div className="flex w-full flex-col items-center gap-2">
              <div className="aspect-video w-full animate-pulse rounded-md border-2 border-zinc-500/40 bg-zinc-950" />
              <span className="font-bold uppercase">Jogo do Dino</span>
            </div>

            <div className="flex w-full flex-col items-center gap-2">
              <div className="aspect-video w-full animate-pulse rounded-md border-2 border-zinc-500/40 bg-zinc-950" />
              <span className="font-bold uppercase">Quiz</span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
