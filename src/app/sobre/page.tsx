'use client'

import Image from 'next/image'
import { Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'

import donatto from '@/assets/donatto.jpg'
import { useState } from 'react'

export default function Sobre() {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    const bioText = document.getElementById('bioText')

    if (bioText) {
      const textArea = document.createElement('textarea')
      textArea.value = bioText.innerText
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)

      setCopied(true)

      toast({
        title: 'Bio copiada com sucesso!',
        duration: 3000,
      })
    }
  }

  return (
    <div className="px-56 py-28 max-lg:px-16 max-sm:px-6">
      <div className="mt-12 flex items-center justify-center gap-32 max-sm:flex-col">
        <div>
          <Image
            src={donatto}
            alt=""
            width={540}
            className="w-[450px] rounded-xl"
          />
        </div>

        <div className="flex w-1/2 flex-col gap-4 text-justify leading-7 max-sm:w-full">
          <p>
            Olá, eu sou{' '}
            <span className="font-bold text-primary">Felippe Donatto</span>, sou
            desenvolvedor front-end com{' '}
            <span className="font-bold">10 anos</span> de experiência.
            Apaixonado pela programação,{' '}
            <span className="font-bold text-primary">ouso</span> a criar minhas
            próprias <span className="font-bold">APIs</span>, explorando
            gradualmente o mundo do <span className="font-bold">backend</span>.
            Como entusiasta da arte, também me aventuro no
            <span className="font-bold">design UI/UX</span>, embora não seja um
            profissional de design, tenho conhecimentos em{' '}
            <span className="font-bold">Figma</span>,
          </p>

          <p>
            Desde os primórdios com HTML e CSS até as tecnologias atuais, como
            <span className="font-bold text-primary">
              {' '}
              Typescript, Next.js, JavaScript
            </span>{' '}
            e PHP, minha jornada reflete uma evolução constante na criação de
            experiências digitais impactantes.
          </p>

          <p>
            Hoje, estou envolvido no projeto de desenvolvimento do Lupaa e
            criando projetos pessoais para comunidade e clientes.{' '}
            <span className="font-bold text-primary">
              Vamos juntos transformar{' '}
            </span>
            ideias em <span className="font-bold text-primary">realidade</span>{' '}
            digital!
          </p>
        </div>
      </div>

      <div className="my-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-primary">BIO</h2>
          <p>
            Isso foi feito para jornalistas, apresentadores de podcast e
            organizadores de eventos copiarem e colarem.
          </p>

          <div className="border-l-4 p-4  leading-6 text-zinc-400" id="bioText">
            <p>
              Felippe Donatto é um desenvolvedor front-end e empreendedor
              brasileiro. Sua experiência e dedicação na área o destacam como
              profissional comprometido com o aprimoramento constante.
              Atualmente, ele concentra seus esforços no desenvolvimento de
              projetos inovadores, contribuindo para a evolução do cenário do
              desenvolvimento front-end.
            </p>
          </div>

          <Button
            variant="outline"
            className="flex items-center gap-2 self-start"
            onClick={copyToClipboard}
          >
            <Copy size={18} />
            {copied ? 'Bio copiada!' : 'Copia Bio'}
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
