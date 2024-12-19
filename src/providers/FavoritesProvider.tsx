import React, { createContext, useState, useEffect, useCallback, useContext } from "react";
import localforage from "localforage";
import { toast } from "sonner";

interface FavoritesContextData {
  favorites: IEndpoint[];
  addFavorite: (item: IEndpoint) => void;
  removeFavorite: (ip: string) => void;
  isFavorite: (ip: string) => boolean;
  hasFavorites: boolean;
}

const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<IEndpoint[]>([]);

  const loadFavorites = useCallback(async () => {
    localforage.getItem<IEndpoint[]>("@Blade:Favorites")
      .then((storedFavorites) => {
        setFavorites(storedFavorites || []);
      })
      .catch((error) => {
        toast.error("Erro ao carregar os itens arquivados");
        console.error("Erro ao carregar os itens arquivados:", error);
      })
  }, []);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  const addFavorite = useCallback(async (item: IEndpoint) => {
    const updatedFavorites = [...favorites, item];
    localforage.setItem("@Blade:Favorites", updatedFavorites)
      .then(() => {
        setFavorites(updatedFavorites);
        toast.success("Item adicionado aos favoritos!");
      })
      .catch((error) => {
        toast.error("Erro ao adicionar aos favoritos");
        console.error("Erro ao adicionar favorito:", error);
      })
  }, [favorites]);

  const removeFavorite = useCallback(async (ip: string) => {
    try {
      const updatedFavorites = favorites.filter((fav) => fav.ip !== ip);
      await localforage.setItem("@Blade:Favorites", updatedFavorites);
      setFavorites(updatedFavorites);
      toast.success("Item removido dos favoritos!");
    } catch (error) {
      toast.error("Erro ao remover dos favoritos");
      console.error("Erro ao remover favorito:", error);
    }
  }, [favorites]);

  const isFavorite = useCallback(
    (ip: string) => favorites.some((fav) => fav.ip === ip),
    [favorites]
  );

  const hasFavorites = favorites.length > 0;

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, hasFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextData => {
  const context = useContext(FavoritesContext);
  if (!context) { throw new Error("useFavorites deve ser usado dentro de um FavoritesProvider"); }
  return context;
};
