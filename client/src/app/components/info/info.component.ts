import { Component, AfterViewInit,OnInit, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Store } from 'src/app/redux/store';
import { Unsubscribe } from 'redux';
import { Order } from '../../models/order';
import { Cart } from '../../models/cart';
import { Customer } from '../../models/customer';
import { CartItem } from '../../models/cartItem';
import { CartitemsService } from '../../services/cartitems.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit,OnDestroy {
private unsubscribe: Unsubscribe;
public totalProducts: number = 0;
public totalOrders: number = 0;

public cart: Cart;
public log: Boolean;
public customer: Customer;
//public itemsCart: CartItem;
public itemsCart: CartItem[];
public order: Order;
public status: String;
public currentDate: Date;
public customerId: String;
public cartId: String;
public finalPrice: Number;
public shippingCity: String;
public shippingAdress: String;
public shippingDate: String;
public carditCardNumber: String;
public totalPrice=0;
public cart_id:String;
public date:Date;
public flag=false;
public ind=false;
public i:number;

    public constructor(private redux: NgRedux<Store>,private itemsservice: CartitemsService,private ordersservice: OrdersService) {}

    public ngOnInit(): void {
        //var i=0; //this index helps to pass the first itertion then components is seen so the messenges will apear only after cart and order services will update per the login
        this.currentDate = new Date();
        this.unsubscribe = this.redux.subscribe(()=>{
            
            this.log = this.redux.getState().isLoggedIn;  //sessionStorage.getItem("isLoggedIn");  
            this.customer = this.redux.getState().customer;
            this.cart = this.redux.getState().cart;
            this.order = this.redux.getState().lastOrder;
            this.itemsCart = this.redux.getState().itemsCart;
            if(this.log==false ){ //intilize iterator,cart and order
                this.i=0; 
                this.flag=false;
            }
            if(this.log==true){
                this.totalProducts = this.redux.getState().products.length;
                this.totalOrders = this.redux.getState().orders.length; 
                if(this.cart!=null && this.itemsCart!=null && this.flag==false){//check if there is open cart
                    //alert(JSON.stringify(this.cart));
                    this.flag=true; 
                    this.postCart();
                }
                else if (this.order!=null && this.flag==false && this.cart==null){//if there is no open cart get last order
                    //alert(JSON.stringify(this.order));
                    this.flag=true; 
                    this.postOrder();
                }
                else if(this.cart==null && this.order==null && this.flag==false && this.i>0)
                {
                    this.status="newCustomer";
                }
            }
            this.i++;      
        });
       
    }

    public ngOnDestroy(): void { // מתבצעת בהריסת הרכיב
        this.unsubscribe();   
    }

    public postOrder(){
        this.status="lastOrder";
        this.customerId =this.order.customerId;
        this.cartId =this.order.cartId;
        this.finalPrice =this.order.finalPrice;
        this.shippingCity =this.order.shippingCity;
        this.shippingAdress =this.order.shippingAdress;
        this.shippingDate =this.order.sippingDate;
        this.carditCardNumber =this.order.carditCardNumber;
    }

    public postCart(){  //,itemscart:CartItem[]
    this.status="openCart";
    this.cart_id=this.cart._id;
    this.date=this.cart.createDate;
    if(this.itemsCart!=null){
        for (var i=0;i<this.itemsCart.length;i++){
            this.totalPrice= this.totalPrice + this.itemsCart[i].total;
        }   
    }
}
}


