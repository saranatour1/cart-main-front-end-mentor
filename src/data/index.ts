import data from './data.json'
export const products: Product[] = data as Product[];

export interface Product {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

export type ProductList = Product[];

export type CartItem = Partial<Product> & {amount:number};