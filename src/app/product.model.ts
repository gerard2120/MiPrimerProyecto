// signo de interrogacion quiere decir que sea opcional
export interface Product {
  name: string;
  price: number;
  image: string;
  category?: string;
}
