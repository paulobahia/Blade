import { MoreHorizontal } from "lucide-react"
import { AnalogOutputOn } from "../AnalogOutputOn"
import { Button } from "../ui/button"
import { VuMeter } from "../VuMeter"
import { Dialog } from "../ui/dialog"
import { DialogEditEndpoint } from "../DialogEditEndpoint"
import { ContextMenu, ContextMenuTrigger } from "../ui/context-menu"
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { ContextMenuEndpoint, DropdownMenuEndpoint } from "./components"
import { AlertDialog } from "../ui/alert-dialog"
import { AlertDialogRemoveFavoriteItem } from "../AlertDialogRemoveItem"

interface EndpointsProps {
  endpoint: IEndpoint
  isSingleChannel: boolean;
}

export const Endpoints = ({ endpoint, isSingleChannel }: EndpointsProps) => {
  const { name, channelsNames, ip } = endpoint

  return (
    <AlertDialog>
      <ContextMenu>
        <ContextMenuTrigger>
          <Dialog>
            <div
              className="flex border border-muted-foreground/10 shadow-md flex-col items-start rounded-lg gap-y-1.5 py-2 bg-muted/50" >
              <div className="flex flex-row items-center justify-between w-full px-2 sm:px-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium truncate text-neutral-100">{name}</span>
                  <span className="text-xs font-light truncate text-card-foreground">{channelsNames}</span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                    >
                      <MoreHorizontal />
                      <span className="sr-only">Editar</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuEndpoint endpoint={endpoint} />
                </DropdownMenu>
              </div>
              <div className="flex flex-row items-center w-full px-2 sm:px-4 gap-x-2">
                <div className="items-center hidden sm:flex gap-x-2">
                  <AnalogOutputOn />
                  {!isSingleChannel && <AnalogOutputOn />}
                </div>
                <div className="flex flex-col flex-1 gap-y-2">
                  <VuMeter endpointIp={ip} />
                  {!isSingleChannel && <VuMeter endpointIp={ip} />}
                </div>
              </div>
            </div>
            <DialogEditEndpoint />
          </Dialog>
        </ContextMenuTrigger>
        <ContextMenuEndpoint endpoint={endpoint} />
      </ContextMenu>
      <AlertDialogRemoveFavoriteItem endpoint={endpoint} />
    </AlertDialog>
  )
}