import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgRedux } from 'ng2-redux';
import { Store } from '../redux/store';
import { Credentials } from '../models/credentials';
import { ActionType } from '../redux/action';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { CustomersService } from './customers.service';
import { Customer } from '../models/customer';
import { Unsubscribe } from 'redux';

@Injectable({
    providedIn: 'root'
  })

export class LoginService implements CanActivate {

public customers: number = 0;
public customer:Customer; 
public unsubscribe: Unsubscribe;

    public constructor(private customersService:CustomersService ,private redux: NgRedux<Store>,private router: Router) {
    }

    public login(){
        sessionStorage.setItem("isLoggedIn", "true");  
        const action = { type: ActionType.Login };
        this.redux.dispatch(action); 
    }

    public logout():void{
        const action = { type: ActionType.Logout };
        this.redux.dispatch(action);    
        sessionStorage.setItem("isLoggedIn", "false"); 
    }

    public canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot,
        routerStateSnapshot: RouterStateSnapshot): boolean {
        if(this.redux.getState().isLoggedIn) {
            return true;
        }
        this.router.navigate(["/login"], {queryParams: { redirect: routerStateSnapshot.url}});
        return false;
        }
}
         
    
       
    

    
    

