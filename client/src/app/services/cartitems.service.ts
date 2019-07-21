import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgRedux } from 'ng2-redux';
import { Store } from '../redux/store';
import { ActionType } from '../redux/action';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartitemsService {

constructor(private httpClient: HttpClient, private redux: NgRedux<Store>) { }

public getAllItemsCart(cartId:String): void{
  const observable = this.httpClient.get<CartItem[]>("http://localhost:3000/api/cartItems/"+cartId);
  
  observable.subscribe(itemscart => {
    const action = { type: ActionType.GetAllItemsCart, payload: itemscart };
    this.redux.dispatch(action); // Will operate the recuder function.  
  });
}
}
