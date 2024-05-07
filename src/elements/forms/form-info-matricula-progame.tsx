'use client'

import { z } from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Confetti from 'react-dom-confetti'
import { zodResolver } from '@hookform/resolvers/zod'
import { saveInfoMatriculaProgame } from '@/app/_actions/action-info-matricula'

import {
  Form,
  FormControl,
  FormDescription,
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

const formSchema = z.object({
  name: z.string().min(4, {
    message: 'O nome deve ter no mínimo 4 caracteres!',
  }),

  child: z.string().min(1, {
    message: 'O nome do seu filho deve ter no mínimo 4 caracteres!',
  }),

  shift: z.string({
    required_error: 'Selecione um turno!',
  }),

  whatsapp: z.string().min(11, {
    message: 'WhatsApp deve ter o número de 11 caracteres.',
  }),

  infoTypes: z.string({
    required_error: 'Selecione o tipo de mensagem!',
  }),
})

export function FormInfoMatriculaProgame() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      child: '',
      shift: '',
      whatsapp: '',
      infoTypes: '',
    },
  })

  const [isCompleted, setCompleted] = useState(false)

  async function createInfoMatriculaProgame(
    values: z.infer<typeof formSchema>,
  ) {
    setCompleted(true)
    await saveInfoMatriculaProgame({
      name: values.name,
      child: values.child,
      shift: values.shift,
      whatsapp: values.whatsapp,
      infoTypes: values.infoTypes,
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
              Obrigado por mandar seu mensagem, em breve entrarei em contato com
              a sua resposta.
            </span>
          </div>
        </>
      ) : (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(createInfoMatriculaProgame)}
              className="space-y-8"
            >
              <div className="flex w-full items-center gap-4 max-sm:flex-col">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Seu Nome</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Como você gosta se ser chamado(a)?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="child"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Idade do seu filho</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Idade do seu filho"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex w-full items-center gap-4 max-sm:flex-col">
                <FormField
                  control={form.control}
                  name="shift"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Informe o turno</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Em qual turno deseja matricular seu filho?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Manhã">Matutino</SelectItem>
                          <SelectItem value="Tarde">Verpertino</SelectItem>
                          <SelectItem value="Noite">Noturno</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>WhatsApp</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="77 0 0000-0000"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="infoTypes"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Como deseja receber informações?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Como deseja receber informações?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Audio">Audio</SelectItem>
                          <SelectItem value="Video">Video</SelectItem>
                          <SelectItem value="Pdf">Pdf</SelectItem>
                          <SelectItem value="Agendar video chamada">
                            Agendar video chamada
                          </SelectItem>
                          <SelectItem value="Ligação">Ligação</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Em caso de ligações ou agendamento será ajustado via
                        WhatsApp o melhor horario!
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full">
                Enviar mensagem
              </Button>
            </form>
          </Form>
        </>
      )}
    </>
  )
}
