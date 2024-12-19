import localforage from "localforage";
import { toast } from "sonner";

export function setFavoriteItemLocalForage(value: IHandler[], type: "add" | "remove") {
  localforage.setItem("@Blade:Favorites", value)
    .then(() => {
      switch (type) {
        case "add":
          toast.success("Sucesso!", { description: 'Item adicionado aos favoritos' })
          break;
        case "remove":
          toast.success("Sucesso!", { description: 'Item removido dos favoritos' })
          break;
      }
    })
    .catch((error) => {
      switch (type) {
        case "add":
          toast.error("Error!", { description: 'Erro ao adicionar item aos favoritos' })
          break;
        case "remove":
          toast.error("Sucesso!", { description: 'Erro ao remover item dos favoritos' })
          break;
      }
      console.log("Erro ao salvar/remover item nos favoritos", error)
    })
}

export async function getFavoriteItems(): Promise<IHandler[] | null> {
  return localforage.getItem<IHandler[]>("@Blade:Favorites")
    .then((item) => {
      return item ? item : null;
    })
    .catch((error) => {
      toast.error("Error!", { description: 'Erro ao coletar items favoritados' })
      console.log("Erro ao coletar items favoritados:", error)
      return null
    })
}