import type { ReactNode } from "react";

interface ParallelLayoutProps {
  children: ReactNode;
  modal?: ReactNode;
  sidebar?: ReactNode;
}

export default function ParallelLayout({
  children,
  modal,
  sidebar,
}: ParallelLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar Slot */}
      {sidebar}

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Modal Slot */}
      {modal}
    </div>
  );
}
