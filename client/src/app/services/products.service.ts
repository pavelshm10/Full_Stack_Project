import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgRedux } from 'ng2-redux';
import { Store } from '../redux/store';
import { ActionType } from '../redux/action';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    public constructor(private httpClient: HttpClient, private redux: NgRedux<Store>) { }

    // Getting all products with Redux in our app:
    public getAllProducts(): void {
        const observable = this.httpClient.get("http://localhost:3000/api/products");
        observable.subscribe(products => {
            const action = { type: ActionType.GetAllProducts, payload: products };
            this.redux.dispatch(action); // Will operate the recuder function.
        });   
    }

    // Demo of adding the product to a real server:
    public addProduct(product: Product): void {
        const observable = this.httpClient.post<Product>("http://localhost:3000/api/products", product);
        observable.subscribe(product => {
            const action = { type: ActionType.AddProduct, payload: product };
            this.redux.dispatch(action);
        });
    }

    public deleteProduct(id: string): void {
        const observable = this.httpClient.delete<Product>("http://localhost:3000/api/products"+id);
        observable.subscribe(p => {
            const action = { type: ActionType.DeleteProduct, payload: p };
            this.redux.dispatch(action);
        });
    }

    public updateProduct(id: string,product: Product): void {
        const observable = this.httpClient.patch<Product>("http://localhost:3000/api/products"+id,product);
        observable.subscribe(p => {
            const action = { type: ActionType.DeleteProduct, payload: p };
            this.redux.dispatch(action);
        });
    }

    // public getProductAsync(): void {
    //     const observable = this.httpClient.get<Product>("/api/products/:_id");
    //     observable.subscribe(product => {
    //         const action = { type: ActionType.GetAllProducts, payload: product };
    //         this.redux.dispatch(action); // Will operate the recuder function.
    //     });
    // }


    // Demo of adding the return product from the server to Redux: 
    // const action = { type: ActionType.AddProduct, payload: product };
    // this.redux.dispatch(action);

    // public getTopProduct(): Product {
    //     // הדמיה כאילו אנו פונים לשרת להחזרת מוצר
    //     const topProduct = new Product("1", "Falafel", 20.00, 100);
    //     return topProduct;
    // }

    // public getTopProductAsync(): Promise<Product> {
    //     // הדמיה של החזרת מוצר בצורה אסינכרונית משרת מרוחק
    //     let promise = new Promise<Product>((resolve, reject) => {
    //         setTimeout(() => {
    //             const topProduct = new Product("1", "Falafel", 20.00, 100);
    //             resolve(topProduct);
    //         }, 3000);
    //     });
    //     return promise;
    // }

    // public getTopProductAsync2(): Observable<Product> {
    //     // שמצביע על השרת Observable הפעולה הזו אינה גלישה לשרת, אלא רק יצירת אוביקט
    //     return this.httpClient.get<Product>("/assets/json/top-product.json");
    // }

    // We can also return a Promise:
    // public getTopProductAsync2(): Promise<Product> {
    //     return this.httpClient.get<Product>("/assets/json/top-product.json").toPromise();
    // }

    // Getting all products without Redux in our app:
    // public getAllProductsAsync(): Observable<Product[]> {
    //     return this.httpClient.get<Product[]>("/assets/json/products.json");
    // }
}
