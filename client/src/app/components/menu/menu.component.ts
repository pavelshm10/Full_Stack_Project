import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Store } from 'src/app/redux/store';
import { ActionType } from 'src/app/redux/action';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    public constructor(public redux: NgRedux<Store>) { }

    public logout(): void {
        sessionStorage.removeItem("isLoggedIn");
        const action = { type: ActionType.Logout };
        this.redux.dispatch(action);
    }

}
