import { LifeBuoy, Send } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


export function NavSecondary() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Help</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem >
            <SidebarMenuButton asChild size="sm">
              <a href="#">
                <LifeBuoy />
                <span>Suporte</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem >
            <SidebarMenuButton asChild size="sm">
              <a href="#">
                <Send />
                <span>Feedback</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
