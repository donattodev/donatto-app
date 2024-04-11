'use client'

import { useState } from 'react'
import { Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'

export function Bio() {
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
    <>
      <div className="my-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-primary">BIO</h2>
          <p>
            Isso foi feito para jornalistas, apresentadores de podcast e
            organizadores de eventos copiarem e colarem.
          </p>

          <div className="border-l-4 p-4  leading-6 text-zinc-400" id="bioText">
            <p className="text-wrap">
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
    </>
  )
}
