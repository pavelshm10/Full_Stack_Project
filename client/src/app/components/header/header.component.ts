import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Store } from 'src/app/redux/store';
import { Unsubscribe } from 'redux';
import { Customer } from '../../models/customer';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Cart } from '../../models/cart';
import { Order } from '../../models/order';
import { ActionType } from '../../redux/action';
import { CartsService } from '../../services/carts.service';
import { OrdersService } from '../../services/orders.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

    public unsubscribe: Unsubscribe;
    public customer:Customer;
    public fname:String;
    public login:Boolean;
    public shopping:Boolean;
    public isShopping:Boolean;
    public cart:Cart;
    public order:Order;
    //public id="";

    public constructor(private redux: NgRedux<Store>, private loginService:LoginService, private router: Router,private cartsservice: CartsService,private ordersservice: OrdersService) { }

    public ngOnInit() {
        //this.login=false;
        
        this.unsubscribe = this.redux.subscribe(()=>{
            this.login=this.redux.getState().isLoggedIn;
            this.shopping=this.redux.getState().isShopping;
            this.customer = this.redux.getState().customer;
            this.cart = this.redux.getState().cart;
            this.order = this.redux.getState().lastOrder;
            //alert(sessionStorage.getItem("isLoggedIn")); 
            if(this.customer!=undefined){
                this.fname=this.customer.fname;
            }  
        });
    }

    public ngOnDestroy(): void { // מתבצעת בהריסת הרכיב
        this.unsubscribe();
    }

    public logout(){
        const i="0"; //intilize cart and order
        this.loginService.logout();
        this.cartsservice.getCart(i);
        this.ordersservice.getLastOrder(i);
        this.router.navigate(["/home"]);
    }

    public search(){
        alert("search");
    }
}
