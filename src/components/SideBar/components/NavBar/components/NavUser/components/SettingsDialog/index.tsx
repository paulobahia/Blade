import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { DialogContent } from "@/components/ui/dialog"
import { SidebarProvider, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, Sidebar } from "@/components/ui/sidebar"
import { Bell, Settings, Lock, User, Archive, AudioLines, Wifi } from "lucide-react"
import { useState } from "react"
import { ArchiveStep } from "./components/ArchiveStep"

enum SettingsDialogStep {
  Perfil = "Perfil",
  Permições = "Permições",
  "Interfaces de áudio" = "Interfaces de áudio",
  Endpoints = "Endpoints",
  Arquivados = "Arquivados",
  Notificações = "Notificações",
  Avançados = "Avançados"
}

const data = {
  nav: [
    { name: SettingsDialogStep.Perfil, icon: <User /> },
    { name: SettingsDialogStep.Permições, icon: <Lock /> },
    { name: SettingsDialogStep["Interfaces de áudio"], icon: <AudioLines /> },
    { name: SettingsDialogStep.Endpoints, icon: <Wifi /> },
    { name: SettingsDialogStep.Arquivados, icon: <Archive /> },
    { name: SettingsDialogStep.Notificações, icon: <Bell /> },
    { name: SettingsDialogStep.Avançados, icon: <Settings /> },
  ],
}

export const SettingsDialog = () => {
  const [settingsDialogStep, setSettingsDialogStep] = useState<SettingsDialogStep>(SettingsDialogStep.Perfil)

  function handlerStepSettingsDialog(step: SettingsDialogStep) {
    setSettingsDialogStep(step)
  }

  const ShowStep = ({ step }: { step: SettingsDialogStep }) => {
    switch (step) {
      case SettingsDialogStep.Perfil:
        return <></>
      case SettingsDialogStep.Permições:
        return <></>
      case SettingsDialogStep["Interfaces de áudio"]:
        return <></>
      case SettingsDialogStep.Endpoints:
        return <></>
      case SettingsDialogStep.Arquivados:
        return <ArchiveStep />
      case SettingsDialogStep.Notificações:
        return <></>
      case SettingsDialogStep.Avançados:
        return <></>
    }
  }

  return (
    <DialogContent className="overflow-hidden p-0 md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
      <SidebarProvider className="items-start">
        <Sidebar className="hidden md:flex">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {data.nav.map(({ icon, name }) => (
                    <SidebarMenuItem key={name}>
                      <SidebarMenuButton asChild isActive={name === settingsDialogStep}>
                        <Button onClick={() => handlerStepSettingsDialog(name)} variant={'ghost'} className="flex items-center justify-start w-full">
                          {icon}
                          <span>{name}</span>
                        </Button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex h-[480px] flex-1 flex-col overflow-hidden">
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink>Configurações</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{settingsDialogStep}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <ShowStep step={settingsDialogStep} />
        </main>
      </SidebarProvider>
    </DialogContent>
  )
}