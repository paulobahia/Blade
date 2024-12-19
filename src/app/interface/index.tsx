import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useHandlers } from "@/services/api/get-handlers";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DialogInterface } from "./components";
import { DialogEditEndpoint, Endpoints } from "@/components";
import { FAKE_HANDLERS } from "@/lib/utils";

export function Interface() {
  let { id } = useParams();
  const { data, isPending } = useHandlers()

  const interfaceData = !isPending ? data.find((item) => item.device == id) : null
  const onlyEndpoints = FAKE_HANDLERS.map(item => item.endpoints).flat().filter(item => item.device == id)

  return (
    <main>
      <header className="flex items-center justify-between h-16 gap-2 px-5 shrink-0">
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip delayDuration={300}>
              <TooltipTrigger asChild>
                <SidebarTrigger className="-ml-1" />
              </TooltipTrigger>
              <TooltipContent side="right" className="text-black bg-white">
                <p className="text-xs font-semibold">CTRL + S</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Separator orientation="vertical" className="h-4 mr-2" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <span>
                  Gerenciar Placas
                </span>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{interfaceData?.device}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size={'sm'} variant={'default'}>
              Criar endpoint
            </Button>
          </DialogTrigger>
          <DialogInterface />
        </Dialog>
      </header>
      <Dialog>
        <div className="flex flex-col flex-1 gap-4 p-4 pt-0">
          <div className="grid grid-cols-1 gap-4 auto-rows-min lg:grid-cols-2 3xl:grid-cols-3">
            {
              onlyEndpoints.map((endpoint) => {
                const { channels } = endpoint
                const isSingleChannel = channels === 1

                return (
                  <Endpoints
                    key={Math.random()}
                    isSingleChannel={isSingleChannel}
                    endpoint={endpoint}
                  />
                )
              })
            }
          </div>
        </div>
        <DialogEditEndpoint />
      </Dialog>
    </main>
  )
}