import { ReactNode } from "react";
import "../../../scss/style.scss";

export function MainLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
