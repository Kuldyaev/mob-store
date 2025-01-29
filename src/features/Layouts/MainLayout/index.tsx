import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { dispatch } from "@/store";
import { setActiveRoute } from "@/store/slices/status";
import HeaderFixed from "@/components/HeaderFixed";
import BottomMenu from "@/components/BottomMenu";
import "@/scss/style.scss";

export function MainLayout({ children }: { children: ReactNode }) {
  const location = useLocation();

  <HeaderFixed />;

  useEffect(() => {
    const paths = location.pathname.split("/");
    if (paths[1] === "") {
      dispatch(setActiveRoute("/"));
    } else {
      dispatch(setActiveRoute("/" + paths[1]));
    }
    if (paths[1] === "" || paths[1] === "/") {
      document.getElementById("root")?.parentElement?.classList.add("dark");
    } else {
      document.getElementById("root")?.parentElement?.classList.remove("dark");
    }
  }, [location]);

  return (
    <main>
      <HeaderFixed />
      <BottomMenu />
      {children}
    </main>
  );
}
