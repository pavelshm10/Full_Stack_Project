import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Store } from 'src/app/redux/store';
import { Unsubscribe } from 'redux';
import { Order } from '../../models/order';
import { Cart } from '../../models/cart';
import { Credentials } from '../../models/credentials';
import { LoginService } from '../../services/login.service';
import { CustomersService } from '../../services/customers.service';
import { ActionType } from '../../redux/action';
import { CartsService } from '../../services/carts.service';
import { Customer } from '../../models/customer';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';
import { CartitemsService } from '../../services/cartitems.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit,OnDestroy{
public unsubscribe: Unsubscribe;
public credentials = new Credentials();
public customer:Customer;
public order:Order;
public cart:Cart;
public logIn: String;
public log:boolean;
public isLogIn:Boolean;
public resumeShoping:Boolean;
public startShoping:Boolean;
public mail: string;
public password: string;
public flag=false;
    public constructor(private redux: NgRedux<Store>,private itemsservice: CartitemsService,private customersService: CustomersService,private loginService:LoginService,private cartsService:CartsService,private ordersService:OrdersService) {}

    public ngOnInit(): void {  
        this.startShoping=true;
        this.resumeShoping=false;
        
        this.unsubscribe = this.redux.subscribe(()=>{
            this.cart = this.redux.getState().cart;
            if(this.cart!=null){
                this.itemsservice.getAllItemsCart(this.cart._id);
            }
            this.order = this.redux.getState().lastOrder;
            this.checkIfCartOpen(this.cart); //check if there is open cart  
            this.log=this.redux.getState().isLoggedIn
            
            if(this.log){
                this.flag=true;
                this.isLogIn=true;        
            }
            else if(this.flag){
                this.credentials.mail = '';
                this.credentials.password = ''
                this.isLogIn=false;
            }
        });
    }

    public ngOnDestroy(): void { // מתבצעת בהריסת הרכיב
        this.unsubscribe();
    }
    
    public login(){
        const observable=this.customersService.getCustomer(this.credentials);
        observable.subscribe(customer => {
            if(customer!=null){
                //alert("hi");
                this.isLogIn=true;
                this.loginService.login();//update customer is loged in
                this.cartsService.getCart(customer._id);
                this.ordersService.getLastOrder(customer._id);
            }
            else{
                alert("Email or password is worng, please correct")
            }
        });
    }
              
    public checkIfCartOpen(cart:Cart){
        if(cart!=null){
            this.resumeShoping=true;
            this.startShoping=false;  
        }
        else{   
            this.resumeShoping=false;
            this.startShoping=true;  
        }     
    }

    public shopping(){
        //alert("hihih");
    }
}
   

    

   
        
    

