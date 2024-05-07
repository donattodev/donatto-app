import { z } from 'zod'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Confetti from 'react-dom-confetti'
import { zodResolver } from '@hookform/resolvers/zod'
import { Checkbox } from '@/components/ui/checkbox'

import { saveNewsletterProgame } from '@/app/_actions/action-newsletter-progame'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  name: z.string().min(11, {
    message: 'WhatsApp deve ter o número de 11 caracteres.',
  }),
  whatsapp: z.string().min(11, {
    message: 'WhatsApp deve ter o número de 11 caracteres.',
  }),
  mensagem: z.string().min(2, {
    message: 'Selecione o tipo de mensagem!',
  }),
  politica: z.boolean().default(false),
})

export function FormNewsletterProgame() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      whatsapp: '',
      mensagem: '',
      politica: true,
    },
  })

  const [isCompleted, setCompleted] = useState(false)

  async function createLeadNewsletter(values: z.infer<typeof formSchema>) {
    setCompleted(true)
    await saveNewsletterProgame({
      name: values.name,
      whatsapp: values.whatsapp,
      mensagem: values.mensagem,
      politica: values.politica,
    })
  }

  return (
    <>
      <Confetti
        active={isCompleted}
        config={{
          spread: 90,
          elementCount: 200,
        }}
      />
      {isCompleted ? (
        <>
          <div className="rounded bg-zinc-900 p-4">
            <span className="font-sans font-bold text-zinc-300">
              Obrigado por se cadastrar em nossa NewsLetter. A cada notícia você
              será informado!
            </span>
          </div>
        </>
      ) : (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(createLeadNewsletter)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Seu nome</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Como você prefere ser chamado(a)?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4 max-sm:flex-col">
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Whatsapp</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="(77) 0 0000-0000"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Tipo de mensagem</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              className=""
                              placeholder="Como quer receber a mensagem?"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Vídeo">Vídeo</SelectItem>
                          <SelectItem value="Audio">Audio</SelectItem>
                          <SelectItem value="PDF">PDF</SelectItem>
                          <SelectItem value="Texto">
                            Mensagem de texto
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="politica"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 text-zinc-400 max-sm:items-center">
                      <FormControl>
                        <Checkbox onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Estou de acordo com as{' '}
                          <Link
                            href="/politica-privacidade"
                            className="font-bold text-primary"
                          >
                            políticas e privacidade
                          </Link>{' '}
                          deste site.
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <FormMessage />
              </div>
              <Button type="submit" disabled={!form.formState.isValid}>
                Cadastrar
              </Button>
            </form>
          </Form>
        </>
      )}
    </>
  )
}
