// @flow




export type Product = {
  id: string,
  name: string,
  label: string,
  price: number,
  onStock: number,
  photoURL: string,
  delivery: boolean,
  description: string
};

export type InitProducts = {type: 'FETCH_PRODUCTS', products: Array<Product>};

export type ShopItemCard = {
  label: string,
  onStock: number,
  delivery: boolean,
  price: number,
  photoURL: string,
  description: string,
};

export type ProductsAction = InitProducts;

export type ProductsState = Array<Product>;

type GetState = () => ProductsState;
type PromiseAction = Promise<ProductsAction>;
type Dispatch = (action: ProductsAction | ProductsThunkAction | PromiseAction | Array<ProductsAction>) => any;
export type ProductsThunkAction = (dispatch: Dispatch, getState: GetState) => any;
