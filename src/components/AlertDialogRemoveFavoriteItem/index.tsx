import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { useArchives } from "@/providers/ArchiveProvider";

interface AlertDialogRemoveArchiveItemProps {
  device: string
}

export const AlertDialogRemoveArchiveItem = ({ device }: AlertDialogRemoveArchiveItemProps) => {
  const { removeArchive } = useArchives();

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Tem certeza que deseja fazer isso?</AlertDialogTitle>
        <AlertDialogDescription>
          Essa ação ira remover o item selecionado da lista de arquivados. Deseja continuar?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction onClick={() => removeArchive(device)}>Continuar</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}