import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-top-product',
    templateUrl: './top-product.component.html',
    styleUrls: ['./top-product.component.css']
})
export class TopProductComponent implements OnInit {

    public topProduct: Product;

    public constructor(private productsService: ProductsService) { }

    public ngOnInit(): void {

        // קריאה סינכרונית:
        // this.topProduct = this.productsService.getTopProduct();

        // Promise קריאה אסינכרונית ע"י אובייקט:
        //const promise = this.productsService.getTopProductAsync();

        //promise.then(function (p) { // Not working - cause the this is the Promiese object
        //    this.topProduct = p;
        //});

        // const that = this; // Will work - saving the current this and using it inside the function
        // promise.then(function (p) { 
        //    that.topProduct = p;
        // });

        // promise.then(function (p) { // Will work - binding the function's this to the class this
        //    this.topProduct = p;
        // }.bind(this));

        //promise.then(p => this.topProduct = p); // Will work - using arrow function

        // Observable קריאה אסינכרונית ע"י אובייקט:
        //const observable = this.productsService.getTopProductAsync2();
        //observable.subscribe(p => this.topProduct = p); // כאן מתבצעת הגלישה
    }
}
