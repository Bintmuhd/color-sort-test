"use client";

import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { SidebarProvider, useSidebar } from "../context/sidebar_context";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <MainLayout>{children}</MainLayout>
    </SidebarProvider>
  );
}

function MainLayout({ children }: { children: ReactNode }) {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={`md:grid ${isSidebarOpen ? "md:grid-cols-12" : "md:grid-cols-9"} md:gap-10`}>
      {isSidebarOpen && (
        <div className="hidden md:block md:col-span-3">
          <Sidebar />
        </div>
      )}
      <div className={`md:col-span-${isSidebarOpen ? "9" : "9"}`}>
        <Header />
        {children}
      </div>
    </main>
  );
}
