import { AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { ContextMenuContent, ContextMenuItem, ContextMenuSeparator } from "@/components/ui/context-menu"
import { DialogTrigger } from "@/components/ui/dialog"
import { useFavorites } from "@/providers/FavoritesProvider"
import { Pencil, Star, Archive } from "lucide-react"

interface ContextMenuEndpointProps {
  endpoint: IEndpoint
}

export const ContextMenuEndpoint = ({ endpoint }: ContextMenuEndpointProps) => {
  const { ip } = endpoint
  const { isFavorite, addFavorite } = useFavorites()
  const isItemFavorite = isFavorite(ip);

  return (
    <ContextMenuContent className="w-40">
      <DialogTrigger asChild className="w-full">
        <ContextMenuItem className="flex flex-row gap-x-2">
          <Pencil size={16} />
          Editar
        </ContextMenuItem>
      </DialogTrigger>
      <ContextMenuSeparator />
      {
        isItemFavorite
          ?
          <AlertDialogTrigger asChild>
            <ContextMenuItem className="flex flex-row gap-x-2">
              <Star color="gold" fill="gold" size={16} />
              Favoritar
            </ContextMenuItem>
          </AlertDialogTrigger>
          :
          <ContextMenuItem onClick={() => addFavorite(endpoint)} className="flex flex-row gap-x-2">
            <Star size={16} />
            Favoritar
          </ContextMenuItem>
      }
      <ContextMenuItem disabled={isItemFavorite} className="flex flex-row gap-x-2">
        <Archive size={16} />
        Arquivar
      </ContextMenuItem>
    </ContextMenuContent>
  )
}