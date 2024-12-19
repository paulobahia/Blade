import { DialogEditHandler } from "@/components/DialogEditHandler";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { ContextMenuContent, ContextMenuItem, ContextMenuSeparator } from "@/components/ui/context-menu";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useArchives } from "@/providers/ArchiveProvider";
import { ExternalLink, Pencil, Archive, ArchiveRestore } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AlertDialogRemoveArchiveItem } from "@/components/AlertDialogRemoveFavoriteItem";

interface ContextMenuNavInterfaceProps {
  handler: IHandler
}

export const ContextMenuNavInterface = ({ handler }: ContextMenuNavInterfaceProps) => {
  const navigate = useNavigate();
  const { device } = handler
  const { addArchive, isArchive } = useArchives()
  const isItemArchive = isArchive(device);

  function goToInterface(deviceName: string) {
    navigate(`/interface/${deviceName}`)
  }

  return (
    <Dialog>
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
        </ContextMenuContent >
        <DialogEditHandler />
        <AlertDialogRemoveArchiveItem device={device} />
      </AlertDialog>
    </Dialog >
  )
}