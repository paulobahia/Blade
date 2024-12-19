import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Button } from "../ui/button"
import { LoaderPinwheel } from "lucide-react"

export const DialogEditEndpoint = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Editar endpoints</DialogTitle>
      </DialogHeader>
      <div className="flex flex-row gap-x-3">
        <div className="flex items-center justify-center m-auto rounded-lg cursor-pointer aspect-square size-12 bg-sidebar-primary text-sidebar-primary-foreground">
          <LoaderPinwheel className="size-7" />
        </div>
        <div className="flex flex-col flex-1 col-span-2 gap-2">
          <Label>
            Alias
          </Label>
          <Input
            placeholder="Placa #01"
            defaultValue=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label>
          IP
        </Label>
        <Input
          disabled
          defaultValue="192.168.0.50"
        />
      </div>
      <div className="grid grid-cols-2 gap-x-3">
      <div className="flex flex-col gap-2">
        <Label>
          Interface de áudio
        </Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione uma interface" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='TESTE'></SelectItem>
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
            <SelectItem value='TESTE'></SelectItem>
          </SelectContent>
        </Select>
      </div>
      </div>
      <DialogFooter className="sm:justify-between">
        <DialogClose asChild>
          <Button size={'default'} type="button" variant="outline">
            Fechar
          </Button>
        </DialogClose>
        <Button size={'default'} type="button" variant="default">
          Editar
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}