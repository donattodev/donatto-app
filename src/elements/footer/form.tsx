import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

export function Form() {
  return (
    <div className="col-span-1 flex flex-col gap-4">
      <h2 className="text-sm font-bold uppercase">NewsLetter</h2>

      <form className="flex w-full flex-col gap-3">
        <Input type="email" placeholder="Digite um e-mail valido" />
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Eu aceito todos as politicaas e privacidade.
          </label>
        </div>
        <Button size={'sm'} className="self-start">
          Cadastrar
        </Button>
      </form>
    </div>
  )
}
