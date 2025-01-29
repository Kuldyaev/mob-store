import { lazy, Suspense } from "react";
import { MainLayout } from "../Layouts/MainLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import { Pages } from "../../pages";
import { COMPONENTS, routes } from "../../shared/routes";
import ProviderWrapper from "@/store/ProviderWrapper";

const ProfilePage = lazy(() => import("@/pages/ProfilePage"));

const pages: { [key in COMPONENTS]: JSX.Element } = {
  [COMPONENTS.HOME]: <Pages.HomePage />,
  [COMPONENTS.EXAMPLES]: <Pages.ExamplesPage />,
  [COMPONENTS.CATALOG]: <Pages.CatalogPage />,
  [COMPONENTS.CART]: <Pages.CartPage />,
  [COMPONENTS.PROFILE]: (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfilePage />
    </Suspense>
  ),
};

function App() {
  return (
    <ProviderWrapper>
      <MainLayout>
        <Routes>
          {routes.map(({ path, componentName }) => (
            <Route path={path} element={pages[componentName]} key={path} />
          ))}
          <Route path={"*"} element={<Navigate to={routes?.[0].path} />} />
        </Routes>
      </MainLayout>
    </ProviderWrapper>
  );
}

export default App;
