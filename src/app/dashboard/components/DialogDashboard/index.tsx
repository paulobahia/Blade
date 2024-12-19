import { Button } from "@/components/ui/button"
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const DialogDahsboard = () => {
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Criar endpoint</DialogTitle>
        <DialogDescription>
          Informe o interface e o nome do seu endpoint.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-2">
        <Label>
          Nome
        </Label>
        <Input
          id="endpoint"
          placeholder="Endpoint #01"
          defaultValue=""
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>
          Interface de áudio
        </Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione uma interface" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ASIO4ALLv2">ASIO4ALL v2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label>
          Canal
        </Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione um canal" />
          </SelectTrigger>
          <SelectContent>
          </SelectContent>
        </Select>
      </div>
      <DialogFooter className="sm:justify-between">
        <DialogClose asChild>
          <Button size={'default'} type="button" variant="outline">
            Fechar
          </Button>
        </DialogClose>
        <Button size={'default'} type="button" variant="default">
          Criar
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}