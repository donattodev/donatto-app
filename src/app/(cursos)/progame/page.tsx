import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/elements/footer'
import { HeaderProgame } from '@/elements/header/header-progame'
import { DialogProgame } from '@/elements/dialog/dialog-progame'
import { ButtonWhatsapp } from '@/elements/buttons/button-whatsapp'
import { FormInfoMatriculaProgame } from '@/elements/forms/form-info-matricula-progame'

import blog from '@/assets/progame/projeto-blog.png'
import quiz from '@/assets/progame/projeto-quiz.png'
import docs from '@/assets/progame/projeto-docs.png'

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
import { Button } from '@/components/ui/button'

export default function Progame() {
  return (
    <>
      <HeaderProgame />

      <main className="pt-10">
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
                uma documentação, um Spped Run e um jogo de quiz. Fora os
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

          <ButtonWhatsapp />
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
                <AccordionTrigger className="max-sm:justify-center">
                  Mundo 01 - O inicio da jornada Descrobrindo o HTML
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-2 font-semibold uppercase text-zinc-400">
                    <li>
                      <span className="text-primary">Fase 01</span> - Primeiras
                      TAGS
                    </li>
                    <li>
                      <span className="text-primary">Fase 02</span> - Estrutura
                      semantica
                    </li>
                    <li>
                      <span className="text-primary">Fase 03</span> - Listas
                      ordenadas e não ordenadas
                    </li>
                    <li>
                      <span className="text-primary">Fase 04</span> - Paragrafos
                      e titulos
                    </li>
                    <li>
                      <span className="text-primary">Fase 05</span> - Formatação
                      de texto e simbolos
                    </li>
                    <li>
                      <span className="text-primary">Fase 06</span> - Imagens,
                      videos e audios
                    </li>
                    <li>
                      <span className="text-primary">Fase 07</span> - Tags
                      complementares e primerias codigos com css
                    </li>
                    <li>
                      <span className="text-primary">Fase 08</span> - Desafio -
                      O Primeiro Chefão
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="max-sm:justify-center">
                  Mundo 02 - A magia do CSS
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-2 font-semibold uppercase text-zinc-400">
                    <li>
                      <span className="text-primary">Fase 09</span> - Reset
                      básico CSS
                    </li>
                    <li>
                      <span className="text-primary">Fase 10</span> - Cores e
                      tamanhos
                    </li>
                    <li>
                      <span className="text-primary">Fase 11</span> - Margens e
                      Position
                    </li>
                    <li>
                      <span className="text-primary">Fase 12</span> - Classes e
                      formatação de texto
                    </li>
                    <li>
                      <span className="text-primary">Fase 13</span> -
                      Identificadores - Bordas e espaçamentos
                    </li>
                    <li>
                      <span className="text-primary">Fase 14</span> - Formatando
                      Imagens
                    </li>
                    <li>
                      <span className="text-primary">Fase 15</span> - Flexbox
                    </li>
                    <li>
                      <span className="text-primary">Fase 16</span> - Variáveis
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="max-sm:justify-center">
                  Mundo 03 - Contruindo o primeiro Projeto
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-2 font-semibold uppercase text-zinc-400">
                    <li>
                      <span className="text-primary">Fase 17</span> - Criando a
                      estrutura do projeto e o HTML
                    </li>
                    <li>
                      <span className="text-primary">Fase 18</span> - Criando o
                      arquivo global do CSS
                    </li>
                    <li>
                      <span className="text-primary">Fase 19</span> - Fontes
                      internas e externas
                    </li>
                    <li>
                      <span className="text-primary">Fase 20</span> - Criando o
                      Header
                    </li>
                    <li>
                      <span className="text-primary">Fase 21</span> - Criando
                      section Jopos
                    </li>
                    <li>
                      <span className="text-primary">Fase 22</span> - Criando
                      section Sobre e Footer
                    </li>
                    <li>
                      <span className="text-primary">Fase 23</span> - Criando a
                      documentação
                    </li>
                    <li>
                      <span className="text-primary">Fase 24</span> - Subindo o
                      Projeto
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="max-sm:justify-center">
                  Mundo 04 - Javascript o seu grande aliado
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-2 font-semibold uppercase text-zinc-400">
                    <li>
                      <span className="text-primary">Fase 25</span> - O que é
                      Javascript e o primeiro código
                    </li>
                    <li>
                      <span className="text-primary">Fase 26</span> - Variáveis
                      01
                    </li>
                    <li>
                      <span className="text-primary">Fase 27</span> - Variáveis
                      02
                    </li>
                    <li>
                      <span className="text-primary">Fase 28</span> - Array
                    </li>
                    <li>
                      <span className="text-primary">Fase 29</span> - Funções
                    </li>
                    <li>
                      <span className="text-primary">Fase 30</span> - Eventos
                    </li>
                    <li>
                      <span className="text-primary">Fase 31</span> - Eventos de
                      mouse
                    </li>
                    <li>
                      <span className="text-primary">Fase 32</span> - Desafio
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="max-sm:justify-center">
                  Mundo 05 - A primeira grande batalha - Jogo do Quiz
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-2 font-semibold uppercase text-zinc-400">
                    <li>
                      <span className="text-primary">Fase 33</span> - Conhecendo
                      o projeto e criando estrutura
                    </li>
                    <li>
                      <span className="text-primary">Fase 34</span> - Motando o
                      Html e Css básico
                    </li>
                    <li>
                      <span className="text-primary">Fase 35</span> -
                      Finalizando o CSS e construindo as perguntas
                    </li>
                    <li>
                      <span className="text-primary">Fase 36</span> - Listando
                      as perguntas na tela
                    </li>
                    <li>
                      <span className="text-primary">Fase 37</span> -
                      Verificando a resposta
                    </li>
                    <li>
                      <span className="text-primary">Fase 38</span> - Exibindo
                      mensagens de erro ou acerto
                    </li>
                    <li>
                      <span className="text-primary">Fase 39</span> - Resultado
                      final e ajustes
                    </li>
                    <li>
                      <span className="text-primary">Fase 40</span> - Subindo
                      projeto
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="max-sm:justify-center">
                  Mundo 06 - A batalha final! Speed Run
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-2 font-semibold uppercase text-zinc-400">
                    <li>
                      <span className="text-primary">Fase 41</span> - Conhecendo
                      o projeto e criando estrutura
                    </li>
                    <li>
                      <span className="text-primary">Fase 42</span> - Motando o
                      Html e Css básico
                    </li>
                    <li>
                      <span className="text-primary">Fase 43</span> -
                      Finalizando o CSS
                    </li>
                    <li>
                      <span className="text-primary">Fase 44</span> - Exibindo
                      elementos na tela
                    </li>
                    <li>
                      <span className="text-primary">Fase 45</span> - Fazendo
                      obstaculos se mecherem
                    </li>
                    <li>
                      <span className="text-primary">Fase 46</span> - Criando
                      sistema de pulos
                    </li>
                    <li>
                      <span className="text-primary">Fase 47</span> -
                      Verificando evento de poulos e contato com obstaculos
                    </li>
                    <li>
                      <span className="text-primary">Fase 48</span> - Pagina de
                      gameover e subindo projeto
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex gap-4">
            <ButtonWhatsapp />
            <Button asChild variant={'outline'}>
              <Link
                href="https://progame.notion.site/Ementa-Progame-903d1cf25d2a4259a402329d74fc90d5?pvs=25"
                target="_blank"
              >
                Ver todo o conteudo
              </Link>
            </Button>
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
            <Link href="https://docs-progame.vercel.app/" target="_blank">
              <div className="flex w-full flex-col items-center gap-2">
                <Image
                  src={docs}
                  alt=""
                  className="aspect-video rounded-md border-2  border-zinc-500/40"
                />
                <span className="font-bold uppercase">Docs</span>
              </div>
            </Link>

            <Link href="https://blog-eta-five-97.vercel.app/" target="_blank">
              <div className="flex w-full flex-col items-center gap-2">
                <Image
                  src={blog}
                  alt=""
                  className="aspect-video rounded-md border-2  border-zinc-500/40"
                />
                <span className="font-bold uppercase">Blog</span>
              </div>
            </Link>

            <Link href="https://quizzes-progame.vercel.app/" target="_blank">
              <div className="flex w-full flex-col items-center gap-2">
                <Image
                  src={quiz}
                  alt="Foto da previa do Projeto Quizzes"
                  className="aspect-video rounded-md border-2  border-zinc-500/40"
                />
                <span className="font-bold uppercase">Quizzes</span>
              </div>
            </Link>

            <div className="flex w-full flex-col items-center gap-2">
              <div className="aspect-video w-full animate-pulse rounded-md border-2 border-zinc-500/40 bg-zinc-950" />
              <span className="font-bold uppercase">Speed Run</span>
            </div>
          </div>
        </section>

        <section className="box flex flex-col items-center gap-16 pb-24 pt-16">
          <div className="flex flex-col items-center gap-1">
            <h2 className="animate-down text-4xl font-bold uppercase max-sm:text-center">
              Como <span className="text-primary">matricular</span>?
            </h2>
            <p className="animate-down text-center text-sm font-semibold uppercase text-zinc-300">
              Envie seu whatsapp e receba todas as informações de como se
              matricular
            </p>
          </div>

          <div className="w-full max-w-4xl">
            <FormInfoMatriculaProgame />
          </div>
        </section>

        <Footer.Root>
          <Footer.Field>
            <Footer.Branding />
            <Footer.Area />
          </Footer.Field>
          <Footer.Base />
        </Footer.Root>
      </main>

      <DialogProgame />
    </>
  )
}
