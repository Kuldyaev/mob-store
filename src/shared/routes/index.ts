export enum PATHS {
  HOME = "/",
  EXAMPLES = "/examples",
  CATALOG = "/catalog",
  CART = "/cart",
  PROFILE = "/profile",
}
export enum COMPONENTS {
  HOME = "HOME",
  EXAMPLES = "EXAMPLES",
  CATALOG = "CATALOG ",
  CART = "CART",
  PROFILE = "PROFILE",
}

export const routes = [
  { path: PATHS.HOME, componentName: COMPONENTS.HOME },
  { path: PATHS.EXAMPLES, componentName: COMPONENTS.EXAMPLES },
  { path: PATHS.CATALOG, componentName: COMPONENTS.CATALOG },
  { path: PATHS.CART, componentName: COMPONENTS.CART },
  { path: PATHS.PROFILE, componentName: COMPONENTS.PROFILE },
];
