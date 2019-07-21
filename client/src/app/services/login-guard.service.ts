import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import { Store } from '../redux/store';

@Injectable({
    providedIn: 'root'
})
export class LoginGuardService {

    public constructor(private redux: NgRedux<Store>, private router: Router) { }

    

}
