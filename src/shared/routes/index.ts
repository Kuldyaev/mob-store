export enum PATHS {
  HOME = "/",
  EXAMPLES = "/examples",
}
export enum COMPONENTS {
  HOME = "HOME",
  EXAMPLES = "EXAMPLES",
}

export const routes = [
  { path: PATHS.HOME, componentName: COMPONENTS.HOME },
  { path: PATHS.EXAMPLES, componentName: COMPONENTS.EXAMPLES },
];
