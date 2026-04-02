// app/(dashboard)/_components/sidebar-menu-list.tsx

import { SIDEBAR_MENU } from "@/app/utils/constants";
import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Link from "next/link";

export default function SidebarMenuList() {
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          {SIDEBAR_MENU.map((item) => {
            const Icon = item.icon;
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild tooltip={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="group-data-[collapsible=icon]:hidden">
                      {item.label}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
}
