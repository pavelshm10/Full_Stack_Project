import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Store } from 'src/app/redux/store';
import { Unsubscribe } from 'redux';
import { CartItem } from '../../models/cartItem';
import { Cart } from '../../models/cart';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {
public login:boolean;
public unsubscribe: Unsubscribe; 
public itemsCart: CartItem[];
public cart: Cart;
public products: Product[];
public productId: String;
public productName: String;
public total=0;
public flag:boolean=true;
  
constructor(private redux: NgRedux<Store>) { }

  ngOnInit() {
    this.unsubscribe = this.redux.subscribe(()=>{
      this.products=this.redux.getState().products;
      this.cart = this.redux.getState().cart;
      //this.login = this.redux.getState().isLoggedIn;
      this.itemsCart = this.redux.getState().itemsCart;  
      if(this.flag==true){ //enter just once
        for(var i=0;i<this.itemsCart.length;i++){
          this.total=this.total+this.itemsCart[i].total;
        }     
      }
      this.flag=false;
    });
    //
  }

  public ngOnDestroy(): void { // מתבצעת בהריסת הרכיב
    this.unsubscribe();   
}
}
