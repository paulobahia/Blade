import { Breadcrumb, BreadcrumbList, BreadcrumbItem } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HandlerCards } from "./components/HandlerCards"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { DialogDahsboard } from "./components/DialogDashboard"
import { FavoriteCards } from "./components/FavoriteCards"
import { useFavorites } from "@/providers/FavoritesProvider"

export function Dashboard() {
  const { hasFavorites } = useFavorites()

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
                  Dashboard
                </span>
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
          <DialogDahsboard />
        </Dialog>
      </header>
      <div className="flex flex-col flex-1 gap-4 p-4 pt-0">
        <div className="grid grid-cols-1 gap-4 auto-rows-min">
          {hasFavorites && <FavoriteCards />}
          <HandlerCards />
        </div>
      </div>
    </main >
  )
}