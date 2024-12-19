import { Home, Search } from "lucide-react";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../ui/tooltip";
import { useEffect, useState } from "react";
import { NavCommandDialog } from "./components/NavCommandDialog";

export function NavBar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to={'/'}>
                <Home />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem>
            <TooltipProvider>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <SidebarMenuButton onClick={() => setOpen((open) => !open)} asChild>
                    <div className="cursor-pointer">
                      <Search />
                      <span>Pesquisar</span>
                    </div>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right" className="text-black bg-white">
                  <p className="text-xs font-semibold">CTRL + K</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
      <NavCommandDialog open={open} setOpen={setOpen} />
    </>
  )
}
