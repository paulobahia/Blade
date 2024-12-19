import { DialogEditEndpoint, DialogEditHandler, Endpoints } from "@/components"
import { ContextMenuHandlerCards } from "./components"
import { Dialog } from "@/components/ui/dialog"
import { FAKE_HANDLERS } from "@/lib/utils"
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useArchives } from "@/providers/ArchiveProvider"

export const HandlerCards = () => {
  const { archives } = useArchives()
  // const { data: handlers, isPending } = useHandlers()

  const filterHandlers = FAKE_HANDLERS.filter((handler) => !archives.some(archived => archived.device === handler.device))

  return (
    <Dialog>
      <Accordion type="multiple" className="flex flex-col w-full gap-4">
        {
          filterHandlers.map((handler, index) => {
            const { device, endpoints } = handler
            return (
              <ContextMenu key={index}>
                <ContextMenuTrigger>
                  <AccordionItem value={device}>
                    <div className="flex flex-col items-start p-4 border rounded-lg shadow-md border-muted-foreground/10 bg-muted/50" >
                      <div className="w-full">
                        <AccordionTrigger className="flex items-center justify-between w-full p-0 hover:no-underline">
                          <div className="grid flex-1 text-sm leading-tight text-left">
                            <span className="text-lg font-semibold truncate">
                              Placa #{(index + 1).toString().padStart(2, "0")}
                            </span>
                            <span className="text-xs font-normal truncate">
                              {device}
                            </span>
                          </div>
                        </AccordionTrigger>
                      </div>
                      <div className="w-full">
                        <Dialog>
                          <AccordionContent className="grid grid-cols-1 gap-4 pb-0 mt-3 auto-rows-min xl:grid-cols-2 3xl:grid-cols-3">
                            {
                              endpoints.map((endpoint) => {
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
                          </AccordionContent>
                          <DialogEditEndpoint />
                        </Dialog>
                      </div>
                    </div>
                  </AccordionItem>
                </ContextMenuTrigger>
                <ContextMenuHandlerCards handler={handler} />
              </ContextMenu>
            )
          })
        }
      </Accordion>
      <DialogEditHandler />
    </Dialog>
  )
}