export interface CartState {
  goods: CartItem[];
}

export interface CartItem {
  id: number;
  brand: string;
  type: string;
  img: string;
  desc: string;
  size: string;
  delivery: string;
  color: string;
  price: string;
  available: boolean;
  warning: string | null;
}
