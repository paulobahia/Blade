import { NavBar } from "./components/NavBar"
import { NavInterface } from "@/components/SideBar/components/NavBar/components/NavInterface"
import { NavSecondary } from "@/components/SideBar/components/NavBar/components/NavSecondary"
import { NavUser } from "@/components/SideBar/components/NavBar/components/NavUser"
import { Sidebar, SidebarContent, SidebarFooter } from "@/components/ui/sidebar"
import { NavFavorites } from "./components/NavBar/components/NavFavorites"
import { useFavorites } from "@/providers/FavoritesProvider"

const data = {
  user: {
    name: "Thiaguinho do VueJS",
    email: "elton.jhon@playlist.com.br"
  }
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { hasFavorites } = useFavorites();

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarContent>
        <NavBar />
        <NavInterface />
        <div className="mt-auto">
          {hasFavorites && <NavFavorites />}
          <NavSecondary />
        </div>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
