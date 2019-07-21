import { Store } from './store';
import { Action, ActionType } from './action';

export class Reducer {

    public static reduce(oldStore: Store, action: Action): Store {

        const newStore = { ...oldStore };

        // Changing the newStore according the action...
        switch (action.type) {

            case ActionType.Login: 
                newStore.isLoggedIn = true;
                break;

            case ActionType.Logout: 
                
                newStore.isLoggedIn = false;
                break;

            case ActionType.InShopping: 
                newStore.isShopping = true;
                break;

            case ActionType.OutShopping: 
                
                newStore.isShopping = false;
                break;

            //product
            case ActionType.GetAllProducts:
                newStore.products = action.payload;
                break;

            case ActionType.AddProduct:
                newStore.products.unshift(action.payload);
                break;

            case ActionType.UpdateProduct:
                for (let i = 0; i < newStore.products.length; i++) {
                    if (newStore.products[i]._id === action.payload.id) {
                        newStore.products[i] = action.payload;
                        break;
                    }
                }
                break;

            case ActionType.DeleteProduct:
                
                for (let i = 0; i < newStore.products.length; i++) {
                    if (newStore.products[i]._id === action.payload.id) {
                        newStore.products[i]=action.payload;
                        break;
                    }
                }
                break;
            
            //orders
            case ActionType.GetAllOrders:
                
                newStore.orders = action.payload;
                break;
            
            
            case ActionType.GetLastOrder:
            
            if(action.payload==null){
                newStore.lastOrder=null;
                break;
            }
            else{    
                newStore.lastOrder=action.payload;    
            }
            break;
            
            case ActionType.AddOrder:
            newStore.orders.unshift(action.payload);
            break;

            //customer
            case ActionType.AddCustomer:
                newStore.customer=action.payload;
                newStore.customers.unshift(action.payload);
                break;
            
            case ActionType.GetAllCustomers:
                newStore.customers = action.payload;
                break;

            case ActionType.GetCustomer: 
            if(action.payload==null){
                newStore.customer=null;
                break;
            }
            else{
                for (let i = 0; i < newStore.customers.length; i++) {
                        if (newStore.customers[i].mail === action.payload.mail &&  newStore.customers[i].password === action.payload.password){
                            newStore.customer=newStore.customers[i];   
                        break;
                        }
                }
            }
            break;
            
            //cart
            case ActionType.GetAllCarts:
                newStore.carts = action.payload;
                break;

            case ActionType.GetCart:
                if(action.payload==null){
                    newStore.cart=null;
                    break;
                }
                else{
                    for (let i = 0; i < newStore.carts.length; i++) {
                        if (newStore.carts[i].customerId === action.payload.customerId) {
                            newStore.cart=newStore.carts[i];
                            break;
                        }
                    }
                }
            break;
            
            case ActionType.GetAllItemsCart:
                newStore.itemsCart = action.payload;
            break;

            case ActionType.AddCart:
                newStore.carts.unshift(action.payload);
            break;
            
        }

        return newStore;
    }

    
}