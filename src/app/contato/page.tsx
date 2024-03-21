import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FormCourses } from '@/elements/forms/form-courses'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Contato() {
  return (
    <div className="flex justify-start gap-2 px-56 py-28 max-lg:px-16 max-sm:flex-col max-sm:px-6">
      <div className="flex w-full flex-col gap-12">
        <h2 className="text-2xl font-bold uppercase">Entre em contato</h2>
        <FormCourses />
      </div>

      <div className="w-full">
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

              <Button variant={'outline'} className="w-full" asChild>
                <Link href="/agenda">Agenda</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
