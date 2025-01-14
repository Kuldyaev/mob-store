import { MainLayout } from "../Layouts/MainLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import { Pages } from "../../pages";
import { COMPONENTS, routes } from "../../shared/routes";

const pages: { [key in COMPONENTS]: JSX.Element } = {
  [COMPONENTS.HOME]: <Pages.HomePage />,
  [COMPONENTS.EXAMPLES]: <Pages.ExamplesPage />,
  [COMPONENTS.CATALOG]: <Pages.CatalogPage />,
  [COMPONENTS.CART]: <Pages.CartPage />,
  [COMPONENTS.PROFILE]: <Pages.ProfilePage />,
};

function App() {
  return (
    <MainLayout>
      <Routes>
        {routes.map(({ path, componentName }) => (
          <Route path={path} element={pages[componentName]} key={path} />
        ))}
        <Route path={"*"} element={<Navigate to={routes?.[0].path} />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
