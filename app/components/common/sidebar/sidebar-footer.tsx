import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export default function SidebarFooterSection(user: { name: string }) {
  const initials = user.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip={user.name}>
            <Avatar className="group-data-[collapsible=icon]:size-6">
              {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
              <AvatarImage alt={user.name} />
              <AvatarFallback className="text-[9px] leading-none">
                {initials}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm group-data-[collapsible=icon]:hidden">
              {user.name}
            </span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
