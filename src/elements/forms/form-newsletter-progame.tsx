'use client'

import { z } from 'zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { Checkbox } from '@/components/ui/checkbox'

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
  whatsapp: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  mensagem: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  politica: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export function FormNewsletterProgame() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      whatsapp: '',
      mensagem: '',
      politica: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex gap-4 max-sm:flex-col">
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Whatsapp</FormLabel>
                <FormControl>
                  <Input placeholder="(77) 0 0000-0000" {...field} />
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
                    <SelectItem value="Mensagem de texto">
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
                      politicas e privacidade
                    </Link>{' '}
                    deste site.
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Cadastrar</Button>
      </form>
    </Form>
  )
}
