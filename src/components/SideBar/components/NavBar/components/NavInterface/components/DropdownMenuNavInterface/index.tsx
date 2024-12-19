import { AlertDialogRemoveArchiveItem } from "@/components/AlertDialogRemoveFavoriteItem";
import { DialogEditHandler } from "@/components/DialogEditHandler";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { useArchives } from "@/providers/ArchiveProvider";
import { ExternalLink, Pencil, Archive, ArchiveRestore } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DropdownMenuNavInterfaceProps {
  handler: IHandler

}

export const DropdownMenuNavInterface = ({ handler }: DropdownMenuNavInterfaceProps) => {
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
        <DropdownMenuContent align="start" className="w-40">
          <DropdownMenuItem onClick={() => goToInterface(device)} className="flex flex-row gap-x-2">
            <ExternalLink size={16} />
            Abrir
          </DropdownMenuItem>
          <DialogTrigger asChild className="w-full">
            <DropdownMenuItem className="flex flex-row gap-x-2">
              <Pencil size={16} />
              Editar
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuSeparator />
          {
            isItemArchive
              ?
              <AlertDialogTrigger asChild>
                <DropdownMenuItem className="flex flex-row gap-x-2">
                  <ArchiveRestore size={16} />
                  Desarquivar
                </DropdownMenuItem>
              </AlertDialogTrigger>
              :
              <DropdownMenuItem onClick={() => addArchive(handler)} className="flex flex-row gap-x-2">
                <Archive size={16} />
                Arquivar
              </DropdownMenuItem>
          }
        </DropdownMenuContent>
        <AlertDialogRemoveArchiveItem device={device} />
        <DialogEditHandler />
      </AlertDialog>
    </Dialog>
  )
}