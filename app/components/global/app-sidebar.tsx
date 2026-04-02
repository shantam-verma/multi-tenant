// app/(dashboard)/_components/app-sidebar.tsx

import { Sidebar } from "@/components/ui/sidebar";
import SidebarHeaderLogo from "../common/sidebar/sidebar-header";
import SidebarMenuList from "../common/sidebar/sidebar-menu";
import SidebarFooterSection from "../common/sidebar/sidebar-footer";

// server data
async function getSidebarData() {
  return {
    org: {
      name: "InsightOps",
      logo: "/logo.png",
    },
    user: {
      name: "Shantam Verma",
    },
  };
}

export default async function AppSidebar() {
  const { org, user } = await getSidebarData();

  return (
    <Sidebar collapsible="icon">
      {/* HEADER (ORG BRANDING) */}
      <SidebarHeaderLogo {...org} />

      {/* CONTENT (MENU) */}
      <SidebarMenuList />

      {/* FOOTER (USER) */}
      <SidebarFooterSection {...user} />
    </Sidebar>
  );
}
