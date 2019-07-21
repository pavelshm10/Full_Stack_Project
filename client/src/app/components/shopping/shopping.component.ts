import { Component, OnInit,OnDestroy } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';
import { Unsubscribe } from 'redux';
import { NgRedux } from 'ng2-redux';
import { Store } from '../../redux/store';
import { Order } from '../../models/order';
import { Cart } from '../../models/cart';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit,OnDestroy {
  public unsubscribe: Unsubscribe;
  public login:Boolean;
  public order:Order;
  public cart:Cart;
  public inShopping:Boolean;
  
  constructor(private title: Title, private redux: NgRedux<Store>,private shoppingService: ShoppingService,private router: Router,private route: ActivatedRoute ) {}

  public ngOnInit():void   { 
    this.title.setTitle("Northwind | Shop");
    this.shoppingService.inshopping();
  }

  public ngOnDestroy():void{
    this.shoppingService.outshopping();
    //this.unsubscribe();
  }
}
