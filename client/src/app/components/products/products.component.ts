import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from 'src/app/models/product';
import { NgRedux } from 'ng2-redux';
import { Store } from 'src/app/redux/store';
import { Unsubscribe } from 'redux';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

    public allProducts: Product[];
    private unsubscribe: Unsubscribe;

    public constructor(private title: Title, 
        private redux: NgRedux<Store>) { }

    public ngOnInit(): void {

        // this.unsubscribe = this.redux.subscribe(()=>{
        //     this.allProducts = this.redux.getState().products;
        // });

        // Getting all products without Redux in our app:
        // const observable = this.productsService.getAllProductsAsync();
        // observable.subscribe(products => {
        //     this.allProducts = products;
        //     console.log(this.allProducts);
        // });

        // Getting all products with Redux in our app: 
        //this.allProducts = this.redux.getState().products;

       
    }

    public ngOnDestroy(): void {
        //this.unsubscribe();
    }
}
