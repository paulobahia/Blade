import { MiniVuMeter } from "@/components/MiniVuMeter";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "@/components/ui/sidebar";
import { useFavorites } from "@/providers/FavoritesProvider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function NavFavorites() {
  const { favorites } = useFavorites();
  const [favoritesData, setFavoritesData] = useState(favorites);

  useEffect(() => {
    setFavoritesData(favorites);
  }, [favorites]);

  function moveToEnd(from: number) {
    setFavoritesData(prevCards => {
      const updatedCards = [...prevCards];
      const [item] = updatedCards.splice(from, 1);
      updatedCards.push(item);
      return updatedCards;
    });
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="px-0">Favoritos</SidebarGroupLabel>
      <SidebarGroupContent className="relative mt-2 flex items-center justify-center h-[7vh]">
        <div className="relative w-full h-full">
          {favoritesData.map((endpoint, index) => {
            const canDrag = index === 0;
            const { ip, channelsNames, name } = endpoint

            return (
              <motion.li
                key={ip}
                className={`absolute w-full grid grid-cols-1 items-center px-2 justify-center h-full list-none origin-top rounded-lg border border-muted-foreground/20 bg-muted ${canDrag ? 'cursor-grab' : 'cursor-auto'}`}
                animate={{ top: index * -5, scale: 1 - index * 0.06, zIndex: 2 - index }}
                drag={canDrag ? "y" : false}
                dragConstraints={{ top: 0, bottom: 0 }}
                onDragEnd={() => moveToEnd(index)}
              >
                <div className="flex flex-col gap-y-1">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-medium truncate text-neutral-100">{name}</span>
                    <span className="text-[9px] font-light truncate text-card-foreground">{channelsNames}</span>
                  </div>
                  <MiniVuMeter endpointIp={ip} />
                </div>
              </motion.li>
            );
          })}
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}