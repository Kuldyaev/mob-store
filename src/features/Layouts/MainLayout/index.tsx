import { ReactNode } from "react";
import BottomMenu from "../../../components/BottomMenu";
import "../../../scss/style.scss";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <BottomMenu />
      {children}
    </main>
  );
}
