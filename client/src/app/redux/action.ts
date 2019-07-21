export enum ActionType {
    Login,
    Logout,
    InShopping,
    OutShopping,
    //products
    GetAllProducts,
    AddProduct,
    UpdateProduct,
    DeleteProduct,
    
     
    //oredrs
    GetAllOrders,
    GetLastOrder,
    AddOrder,
    //UpdateOrder,
    //DeleteOrder,
   
    //customer
    GetCustomer,
    AddCustomer,
    GetAllCustomers, //להוריד
    //cartItems
    // GetAllCartItems,
    // AddCartItem,
    // UpdateCartItem,
    // DeleteCartItem,
   
    //cart
    GetAllCarts,
    GetCart,
    AddCart,

    //item
    GetAllItemsCart
}

export interface Action {
    type: ActionType,
    payload?: any // payload = מטען - המידע עבור אותה הפעולה
}