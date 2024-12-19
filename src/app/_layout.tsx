import { AppSidebar } from "@/components/SideBar"
import { SidebarInset, SidebarProvider, } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}