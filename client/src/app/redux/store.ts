import { Product } from '../models/product';
import { Order } from '../models/order';
import { Cart } from '../models/cart';
import { Customer } from '../models/customer';
import { CartItem } from '../models/cartItem';

// This is our Store - a class containing all of our app-level data:

export class Store {
    public isLoggedIn: boolean;
    public isShopping: boolean;
    public products: Product[];
    public orders: Order[];
    public carts: Cart[];
    public customers: Customer[];
    public lastOrder: Order;
    public cart: Cart;
    public customer: Customer;
    public itemsCart: CartItem[];

    public constructor() {
        if(sessionStorage.getItem("isLoggedIn") === "true")
            this.isLoggedIn = true;
    }
}