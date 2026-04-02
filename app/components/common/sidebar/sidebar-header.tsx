import { LogoIcon } from "@/app/utils/icons";
import { SidebarHeader, SidebarMenuButton } from "@/components/ui/sidebar";
import React from "react";

export default function SidebarHeaderLogo(org: { name: string; logo: string }) {
  return (
    <SidebarHeader className="px-4 py-3">
      <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
        <LogoIcon />
        <span className="font-semibold group-data-[collapsible=icon]:hidden">
          {org.name}
        </span>
      </div>
    </SidebarHeader>
  );
}
