import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {

    public constructor(public productsService: ProductsService) { }

    public mockProduct(): void {
        // const p = new Product();
        // p.id = Math.floor(77 * Math.random()) + 1;
        // p.price = Math.floor(100 * Math.random());
        // p.stock = Math.floor(100 * Math.random());
        // p.name = "Product #" + Math.floor(100 * Math.random());
        // this.productsService.addProduct(p);
    }
}