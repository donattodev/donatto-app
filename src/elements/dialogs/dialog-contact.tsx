import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FormCourses } from '../forms/form-courses'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogClose,
  DialogTrigger,
} from '@/components/ui/dialog'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function DialogContact() {
  return (
    <Dialog>
      <DialogTrigger className="text-sm font-light uppercase  tracking-widest text-zinc-400">
        <span className="transition-all hover:text-zinc-100">Contato</span>
      </DialogTrigger>
      <DialogContent className="max-w-md max-sm:px-6">
        <DialogHeader>
          <Card>
            <CardHeader>
              <CardTitle>Entrer em contato</CardTitle>
              <CardDescription>
                Fique avontade para entrar em contato!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between gap-4">
                <Button variant={'outline'} className="w-full" asChild>
                  <Link
                    href="https://wa.me/message/EVND3KQTJJOTL1"
                    target="_blank"
                  >
                    Orçamentos
                  </Link>
                </Button>
                <DialogClose asChild>
                  <Button variant={'outline'} className="w-full" asChild>
                    <Link href="/agenda">Agenda</Link>
                  </Button>
                </DialogClose>
              </div>

              <div className="my-4 flex w-full items-center justify-center gap-2">
                <div className="w-full border-b border-zinc-500/30" />
                <span className="text-sm font-bold text-zinc-400">ou</span>
                <div className="w-full border-b border-zinc-500/30" />
              </div>

              <FormCourses />
            </CardContent>
          </Card>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
