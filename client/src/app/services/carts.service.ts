import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgRedux } from 'ng2-redux';
import { Store } from '../redux/store';
import { ActionType } from '../redux/action';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

public constructor(private httpClient: HttpClient, private redux: NgRedux<Store>) { }


public getAllCarts(): void{
    
  const observable = this.httpClient.get<Cart[]>("http://localhost:3000/api/carts");
  observable.subscribe(carts => {
    const action = { type: ActionType.GetAllCarts, payload: carts };
    this.redux.dispatch(action); // Will operate the recuder function.  
  });
}

public getCart(c_id:String):void {
  //alert(c_id);
  const observable = this.httpClient.get<Cart>("http://localhost:3000/api/carts/"+c_id);
  observable.subscribe(cart => {
    //alert(JSON.stringify(cart));
    const action = { type: ActionType.GetCart, payload: cart };
    this.redux.dispatch(action); // Will operate the recuder function. 
  });
}
}
