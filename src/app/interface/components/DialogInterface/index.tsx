import { Button } from "@/components/ui/button"
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const DialogInterface = () => {
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Criar endpoint</DialogTitle>
        <DialogDescription>
          Informe o nome do seu endpoint.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label className="sr-only">
            Endpoint
          </Label>
          <Input
            id="endpoint"
            placeholder="Endpoint #01"
            defaultValue=""
          />
        </div>
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