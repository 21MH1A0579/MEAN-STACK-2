import { Product } from './product';

export function calculateTotalPrice(product: Product, quantity: number): number {
    return product.price * quantity;
}

