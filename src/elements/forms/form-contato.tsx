'use client'

import { z } from 'zod'
import { useState } from 'react'
import Confetti from 'react-dom-confetti'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { saveLead } from '@/app/actions'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  whatsapp: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  assunto: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  mensagem: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export function FormContato() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      whatsapp: '',
      assunto: '',
      mensagem: '',
    },
  })

  const [isCompleted, setCompleted] = useState(false)

  const onSubmit = async function onSubmit(values: z.infer<typeof formSchema>) {
    setCompleted(true)
    await saveLead({
      username: values.username,
      email: values.email,
      assunto: values.assunto,
      whatsapp: values.whatsapp,
      mensagem: values.mensagem,
    })
    console.log(saveLead)
    console.log(values)
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
              Sua mensagem foi enviada com sucesso. Aguarde e entrarei em
              contato nas proximas 24h.
            </span>
          </div>
        </>
      ) : (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="animate-rigth flex flex-col gap-4"
            >
              <h2 className="text-2xl font-bold uppercase">
                Sobre cursos e eventos
              </h2>
              <div className="flex items-center gap-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Seu nome</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Como você gostaria de ser chamado?"
                          autoFocus
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Endereço de e-mail</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Endereço de e-mail"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center gap-4">
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>WhatsApp</FormLabel>
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
                  name="assunto"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Email</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo de evento" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Pre">Presencial</SelectItem>
                          <SelectItem value="Onl">Online</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="mensagem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Digite aqui sua mensagem!"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Enviar mensagem</Button>
            </form>
          </Form>
        </>
      )}
    </>
  )
}
