import { AlertDialogRemoveArchiveItem } from "@/components/AlertDialogRemoveFavoriteItem"
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useArchives } from "@/providers/ArchiveProvider"
import { Archive, ArchiveX } from "lucide-react"

export const ArchiveStep = () => {
  const { archives, hasArchives } = useArchives()

  return (
    <div className="flex flex-col flex-1 gap-4 p-4 pt-0 overflow-y-auto">
      {
        hasArchives
          ?
          archives.map(({ device }, index) => {
            return (
              <div key={device} className="flex flex-col items-start p-4 border rounded-lg shadow-md border-muted-foreground/10 bg-muted/50">
                <div className="flex items-center justify-between w-full p-0 hover:no-underline">
                  <div className="grid flex-1 text-sm leading-tight text-left">
                    <span className="text-lg font-semibold truncate">
                      Placa #{(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-xs font-normal truncate">
                      {device}
                    </span>
                  </div>
                  <AlertDialog>
                    <Tooltip delayDuration={300}>
                      <AlertDialogTrigger asChild>
                        <TooltipTrigger>
                          <Button variant={'ghost'} size={'icon'}>
                            <Archive />
                          </Button>
                        </TooltipTrigger>
                      </AlertDialogTrigger>
                      <TooltipContent side="left" className="text-black bg-white">
                        <p className="text-xs font-semibold">Desarquivar</p>
                      </TooltipContent>
                    </Tooltip>
                    <AlertDialogRemoveArchiveItem device={device} />
                  </AlertDialog>
                </div>
              </div>
            )
          })
          :
          <div className="flex flex-col items-center justify-center flex-1 gap-3 p-4 border rounded-lg shadow-md border-muted-foreground/10 bg-muted/50">
            <ArchiveX size={50} />
            <span className="text-sm font-medium truncate">
              Nenhum item arquivado
            </span>
          </div>
      }
    </div>
  )
}