import { AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { useFavorites } from "@/providers/FavoritesProvider"
import { Archive, Pencil, Star } from "lucide-react"

interface DropdownMenuEndpointProps {
  endpoint: IEndpoint
}

export const DropdownMenuEndpoint = ({ endpoint }: DropdownMenuEndpointProps) => {
  const { isFavorite, addFavorite } = useFavorites()
  const { ip } = endpoint
  const isItemFavorite = isFavorite(ip);

  return (
    <DropdownMenuContent align="end" className="w-40">
      <DialogTrigger asChild className="w-full">
        <DropdownMenuItem className="flex flex-row gap-x-2">
          <Pencil size={16} />
          Editar
        </DropdownMenuItem>
      </DialogTrigger>
      <DropdownMenuSeparator />
      {
        isItemFavorite
          ?
          <AlertDialogTrigger asChild>
            <DropdownMenuItem className="flex flex-row gap-x-2">
              <Star color="gold" fill="gold" size={16} />
              Favoritar
            </DropdownMenuItem>
          </AlertDialogTrigger>
          :
          <DropdownMenuItem onClick={() => addFavorite(endpoint)} className="flex flex-row gap-x-2">
            <Star size={16} />
            Favoritar
          </DropdownMenuItem>
      }
      <DropdownMenuItem disabled={isItemFavorite} className="flex flex-row gap-x-2">
        <Archive size={16} />
        Arquivar
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}