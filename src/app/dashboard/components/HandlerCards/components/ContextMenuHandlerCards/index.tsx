import { AlertDialogRemoveArchiveItem } from "@/components/AlertDialogRemoveFavoriteItem"
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { ContextMenuContent, ContextMenuItem, ContextMenuSeparator } from "@/components/ui/context-menu"
import { DialogTrigger } from "@/components/ui/dialog"
import { useArchives } from "@/providers/ArchiveProvider"
import { Archive, ArchiveRestore, ExternalLink, Pencil } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface ContextMenuHandlerCardsProps {
  handler: IHandler
}

export const ContextMenuHandlerCards = ({ handler }: ContextMenuHandlerCardsProps) => {
  const { device } = handler
  const navigate = useNavigate();
  const { addArchive, isArchive } = useArchives()
  const isItemArchive = isArchive(device);

  function goToInterface(deviceName: string) {
    navigate(`/interface/${deviceName}`)
  }

  return (
    <AlertDialog>
      <ContextMenuContent className="w-40">
        <ContextMenuItem onClick={() => goToInterface(device)} className="flex flex-row gap-x-2">
          <ExternalLink size={16} />
          Abrir
        </ContextMenuItem>
        <DialogTrigger asChild className="w-full">
          <ContextMenuItem className="flex flex-row gap-x-2">
            <Pencil size={16} />
            Editar
          </ContextMenuItem>
        </DialogTrigger>
        <ContextMenuSeparator />
        {
          isItemArchive
            ?
            <AlertDialogTrigger asChild>
              <ContextMenuItem className="flex flex-row gap-x-2">
                <ArchiveRestore size={16} />
                Desarquivar
              </ContextMenuItem>
            </AlertDialogTrigger>
            :
            <ContextMenuItem onClick={() => addArchive(handler)} className="flex flex-row gap-x-2">
              <Archive size={16} />
              Arquivar
            </ContextMenuItem>
        }
      </ContextMenuContent>
      <AlertDialogRemoveArchiveItem device={device} />
    </AlertDialog>
  )
}