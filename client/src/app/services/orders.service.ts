import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgRedux } from 'ng2-redux';
import { Store } from '../redux/store';
import { ActionType } from '../redux/action';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public constructor(private httpClient: HttpClient, private redux: NgRedux<Store>) { }

  // Getting all orders with Redux in our app:
  public getAllOrders(): void {
      const observable = this.httpClient.get<Order[]>("http://localhost:3000/api/orders");
      observable.subscribe(orders => {
          const action = { type: ActionType.GetAllOrders, payload: orders };
          this.redux.dispatch(action); // Will operate the recuder function.
      });
  }

  public getLastOrder(c_id: String): void {
    const observable = this.httpClient.get<Order>("http://localhost:3000/api/orders/"+c_id);
    observable.subscribe(order => {
      //alert(order);  
      const action = { type: ActionType.GetLastOrder, payload: order };
        this.redux.dispatch(action); // Will operate the recuder function.
    });
  }

  // Demo of adding the order to a real server:
  // public addOrder(order: Order): void {
  //     const observable = this.httpClient.post<Order>("/api/orders", order);
  //     observable.subscribe(p => {
  //         const action = { type: ActionType.AddOrder, payload: p };
  //         this.redux.dispatch(action);
  //     });
  // }

  // public deleteOrder(id: string): void {
  //     const observable = this.httpClient.delete<Order>("/api/orders/"+id);
  //     observable.subscribe(p => {
  //         const action = { type: ActionType.DeleteOrder, payload: p };
  //         this.redux.dispatch(action);
  //     });
  // }

  // public updateOrder(id: string,order: Order): void {
  //     const observable = this.httpClient.patch<Order>("/api/orders/"+id,order);
  //     observable.subscribe(p => {
  //         const action = { type: ActionType.DeleteOrder, payload: p };
  //         this.redux.dispatch(action);
  //     });
  // }

   
}
