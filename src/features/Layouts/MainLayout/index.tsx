import { ReactNode } from "react";
import HeaderFixed from "@/components/HeaderFixed";
import BottomMenu from "@/components/BottomMenu";
import "@/scss/style.scss";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <HeaderFixed />
      <BottomMenu />
      {children}
    </main>
  );
}
