// @flow

// Products
export type InitProducts = () => void;

export type Product = {
  id: string,
  label: string,
  price: number,
  onStock: number,
  photoURL: string,
  delivery: boolean,
  description: string
};

export type ShopItemCard = {
  label: string,
  onStock: number,
  delivery: boolean,
  price: number,
  photoURL: string,
  description: string,
};

// Orders
export type OrderProduct = {
  id: string,
  label: string,
  photoURL: string,
  price: number,
  quantity: number,
  onStock?: number
};

export type Order = {
  address?: string,
  country?: string,
  deliveryInstructions?: string,
  id?: string,
  orderDate?: number,
  postcode?: string,
  products?: Array<OrderProduct>,
  totalPrice?: number,
  userId?: string
};

export type Orders = Array<Order>;

export type FetchOrdersInit = () => void;
//Cart

export type AddToCart = ( string, string,  string,  number,  number) => Function;

export type IncrementQuantity = ( string,  number) => void;

export type DecrementQuantity = ( string,  number) => void;

export type RemoveFromCart = (string, number, number) => void;

export type OrderPlaced = (Object, Array<OrderProduct>, number) => void;