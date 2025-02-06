export interface AddressState {
  address: AddressItem[];
}

export interface AddressItem {
  id: number;
  type: string;
  checked: boolean;
}
