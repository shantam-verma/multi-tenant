import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./components/global/app-sidebar";
import { Navbar } from "./components/common/navbar/nav";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex min-h-svh w-full flex-col">
        <div className="sticky top-0 z-40 flex h-14 items-center gap-2 border-b bg-background/80 px-3 backdrop-blur-md">
          <SidebarTrigger />
          <Navbar />
        </div>
        <section className="flex-1 p-4">{children}</section>
      </main>
    </SidebarProvider>
  );
}
