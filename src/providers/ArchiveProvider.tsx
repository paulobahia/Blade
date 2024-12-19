import localforage from "localforage";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

interface ArchivesContextData {
  archives: IHandler[];
  addArchive: (item: IHandler) => void;
  removeArchive: (id: string) => void;
  isArchive: (id: string) => boolean;
  hasArchives: boolean;
}

const ArchivesContext = createContext<ArchivesContextData>({} as ArchivesContextData);

export const ArchivesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [archives, setArchives] = useState<IHandler[]>([]);

  const loadArchives = useCallback(async () => {
    try {
      const storedArchives = await localforage.getItem<IHandler[]>("@Blade:Archives");
      setArchives(storedArchives || []);
    } catch (error) {
      toast.error("Erro ao carregar favoritos");
      console.error("Erro ao carregar favoritos:", error);
    }
  }, []);

  useEffect(() => {
    loadArchives();
  }, [loadArchives]);

  const addArchive = useCallback(async (item: IHandler) => {
    try {
      const updatedArchives = [...archives, item];
      await localforage.setItem("@Blade:Archives", updatedArchives);
      setArchives(updatedArchives);
      toast.success("Item arquivado com sucesso!");
    } catch (error) {
      toast.error("Erro ao arquivar item");
      console.error("Erro ao arquivar item:", error);
    }
  }, [archives]);

  const removeArchive = useCallback(async (id: string) => {
    try {
      const updatedArchives = archives.filter((fav) => fav.device !== id);
      await localforage.setItem("@Blade:Archives", updatedArchives);
      setArchives(updatedArchives);
      toast.success("Item desarquivado com sucesso!");
    } catch (error) {
      toast.error("Erro ao desarquivar item");
      console.error("Erro ao desarquivar item:", error);
    }
  }, [archives]);

  const isArchive = useCallback(
    (id: string) => archives.some((arch) => arch.device === id),
    [archives]
  );

  const hasArchives = archives.length > 0;

  return (
    <ArchivesContext.Provider value={{ archives, addArchive, removeArchive, hasArchives, isArchive }}>
      {children}
    </ArchivesContext.Provider>
  );
}

export const useArchives = (): ArchivesContextData => {
  const context = useContext(ArchivesContext);
  if (!context) { throw new Error("useArchives deve ser usado dentro de um ArchivesProvider"); }
  return context;
};