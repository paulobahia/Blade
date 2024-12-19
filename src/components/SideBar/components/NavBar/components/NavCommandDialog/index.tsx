import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command"
import { User, Settings, ChevronRight, LifeBuoy, Send, LogOut, Circle } from "lucide-react"

interface NavCommandDialogProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavCommandDialog = ({ open, setOpen }: NavCommandDialogProps) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Selecione um comando ou pesquise..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        <CommandGroup heading="Comandos">
          <CommandItem>
            <ChevronRight />
            <span>Editar Interface</span>
          </CommandItem>
          <CommandItem>
            <ChevronRight />
            <span>Criar Endpoint</span>
          </CommandItem>
          <CommandItem>
            <ChevronRight />
            <span>Editar Endpoint</span>
          </CommandItem>
          <CommandItem>
            <ChevronRight />
            <span>Favoritos</span>
          </CommandItem>
          <CommandItem>
            <ChevronRight />
            <span>Arquivados</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Placas">
          <CommandItem>
            <Circle />
            <span>Placa #01</span>
          </CommandItem>
          <CommandItem>
            <Circle />
            <span>Placa #02</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />

        <CommandGroup heading="Help">
          <CommandItem>
            <LifeBuoy />
            <span>Suporte</span>
          </CommandItem>
          <CommandItem>
            <Send />
            <span>Feedabck</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Configurações">
          <CommandItem>
            <User />
            <span>Perfil</span>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Configurações</span>
          </CommandItem>
          <CommandItem>
            <LogOut />
            <span>Log out</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}