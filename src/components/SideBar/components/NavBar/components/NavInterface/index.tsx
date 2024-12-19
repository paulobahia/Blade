import { LoaderPinwheel, MoreHorizontal } from "lucide-react";

import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ContextMenuNavInterface, DropdownMenuNavInterface } from "./components";
import { FAKE_HANDLERS } from "@/lib/utils";
import { useArchives } from "@/providers/ArchiveProvider";

export function NavInterface() {
  const navigate = useNavigate();
  // const { data, isPending } = useHandlers()
  const pathname = decodeURIComponent(window.location.pathname)
  const { archives } = useArchives()

  function goToInterface(deviceName: string) {
    navigate(`/interface/${deviceName}`)
  }

  const filterHandlers = FAKE_HANDLERS.filter((handler) => !archives.some(archived => archived.device === handler.device))

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Gerenciar Placas</SidebarGroupLabel>
      <SidebarMenu className="space-y-0.5">
        {
          filterHandlers.map((handler, index) => {
            const { device } = handler
            return (
              <DropdownMenu key={index}>
                <ContextMenu>
                  <ContextMenuTrigger className={`${pathname.includes(device) && 'bg-accent'} rounded-lg`}>
                    <div className="flex flex-row items-center px-2 rounded-lg hover:bg-sidebar-accent">
                      <SidebarMenuButton
                        size="lg"
                        className="px-0 hover:bg-transparent"
                        onClick={() => goToInterface(device)}
                      >
                        <div className="flex items-center justify-center rounded-lg aspect-square size-8 bg-sidebar-primary text-sidebar-primary-foreground">
                          <LoaderPinwheel className="size-4" />
                        </div>
                        <div className="grid flex-1 text-sm leading-tight text-left">
                          <span className="font-semibold truncate">
                            Placa #{(index + 1).toString().padStart(2, "0")}
                          </span>
                          <span className="text-xs truncate">
                            {device}
                          </span>
                        </div>
                      </SidebarMenuButton>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                        >
                          <MoreHorizontal />
                          <span className="sr-only">Editar</span>
                        </Button>
                      </DropdownMenuTrigger>
                    </div>
                  </ContextMenuTrigger>
                  <ContextMenuNavInterface handler={handler} />
                </ContextMenu>
                <DropdownMenuNavInterface handler={handler} />
              </DropdownMenu>
            )
          })
        }
      </SidebarMenu>
    </SidebarGroup >
  )
}
