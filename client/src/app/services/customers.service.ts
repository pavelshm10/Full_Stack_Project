import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgRedux } from 'ng2-redux';
import { Store } from '../redux/store';
import { ActionType } from '../redux/action';
import { Credentials } from '../models/credentials';
import { Unsubscribe } from 'redux';
import { LoginService } from './login.service';
import { dispatch } from 'rxjs/internal/observable/range';
import { CartsService } from './carts.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService  {
  //private unsubscribe: Unsubscribe;
  //public customer: Customer;
  
  

  public constructor(private httpClient: HttpClient, private redux: NgRedux<Store>) { }
  
  public getAllCustomers(): void{
    const observable = this.httpClient.get<Customer[]>("http://localhost:3000/api/customers");
    observable.subscribe(customers => {
      const action = { type: ActionType.GetAllCustomers, payload: customers };
      this.redux.dispatch(action); // Will operate the recuder function.  
    });
  }
  
  public getCustomer(credentials:Credentials){
    const observable= this.httpClient.get<Customer>("http://localhost:3000/api/customers/"+credentials.mail+"&"+credentials.password)
    observable.subscribe(customer => {
      const action = { type: ActionType.GetCustomer, payload: customer };
      this.redux.dispatch(action); // Will operate the recuder function. 
    });
    return observable;
  }
  
  public addCustomer(customer: Customer): void {
  const observable = this.httpClient.post("http://localhost:3000/api/customers", customer);
  observable.subscribe(customer => {
    const action = { type: ActionType.AddCustomer, payload: customer };
      this.redux.dispatch(action);
  });
  }

}













