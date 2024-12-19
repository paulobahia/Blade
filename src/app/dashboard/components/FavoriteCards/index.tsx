import { DialogEditEndpoint, Endpoints } from "@/components";
import { Dialog } from "@/components/ui/dialog";
import { useFavorites } from "@/providers/FavoritesProvider";
import { Star } from "lucide-react"

export const FavoriteCards = () => {
  const { favorites } = useFavorites();

  return (
    <Dialog>
      <div className="flex flex-col items-start p-4 rounded-lg gap-y-3 bg-muted/50">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-start justify-start gap-x-1">
            <span className="text-lg font-semibold truncate">
              Favoritos
            </span>
            <Star size={14} color="gold" fill="gold" />
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 auto-rows-min xl:grid-cols-2 3xl:grid-cols-3">
          {
            favorites.map((endpoint) => {
              const { channels } = endpoint
              const isSingleChannel = channels === 1;

              return (
                <Endpoints
                  key={Math.random()}
                  endpoint={endpoint}
                  isSingleChannel={isSingleChannel}
                />
              )
            })
          }
        </div>
      </div>
      <DialogEditEndpoint />
    </Dialog>
  )
} 