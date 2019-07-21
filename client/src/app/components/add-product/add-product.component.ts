import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    public product = new Product();

    public constructor(private productsService: ProductsService, private router: Router) { }

    public send(): void {
        
        // Send the product to the server + add it to Redux:
        this.productsService.addProduct(this.product);

        // Navigate to the products page: 
        this.router.navigate(["/products"]);
    }
}
