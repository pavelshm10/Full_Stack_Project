import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Router } from '@angular/router';
import { Store } from 'redux';
import { ActionType } from '../redux/action';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private redux: NgRedux<Store>) { }

  public inshopping(){
    sessionStorage.setItem("inShopping", "true");  
    const action = { type: ActionType.InShopping};
    this.redux.dispatch(action);
}

public outshopping():void{
    const action = { type: ActionType.OutShopping };
    this.redux.dispatch(action);
    sessionStorage.setItem("inShopping", "false"); 
}
}
