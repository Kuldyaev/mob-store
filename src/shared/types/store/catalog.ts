export interface CatalogState {
  data: CatalogItem[];
}

export interface CatalogItem {
  id: number;
  title: string;
  image: string;
}
