import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { useFavorites } from "@/providers/FavoritesProvider";

interface AlertDialogRemoveFavoriteItemProps {
  endpoint: IEndpoint
}

export const AlertDialogRemoveFavoriteItem = ({ endpoint: { ip } }: AlertDialogRemoveFavoriteItemProps) => {
  const { removeFavorite } = useFavorites()

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Tem certeza que deseja fazer isso?</AlertDialogTitle>
        <AlertDialogDescription>
          Essa ação ira remover o item selecionado dos favoritos. Deseja continuar?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction onClick={() => removeFavorite(ip)}>Continuar</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}