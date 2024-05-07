'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'

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
  nome: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export function FormInfoProgame() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex w-full items-center gap-4 max-sm:flex-col">
          <FormField
            control={form.control}
            name="nome"
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
            name="nome"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Idade do seu filho</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={8}
                    max={15}
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
            name="nome"
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
                    <SelectItem value="Matutino">Matutino</SelectItem>
                    <SelectItem value="Verpertino">Verpertino</SelectItem>
                    <SelectItem value="Noturno">Noturno</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>WhatsApp</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="77 0 0000-0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="nome"
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
                  Em caso de ligações ou agendamento será ajustado via WhatsApp
                  o melhor horario!
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
  )
}
