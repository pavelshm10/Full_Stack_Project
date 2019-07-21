import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/products/products.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { AboutComponent } from '../components/about/about.component';
import { Page404Component } from '../components/page404/page404.component';
import { OrdersComponent } from '../components/orders/orders.component';
import { OldOrdersComponent } from '../components/old-orders/old-orders.component';
import { NewOrdersComponent } from '../components/new-orders/new-orders.component';
import { TopProductComponent } from '../components/top-product/top-product.component';
import { AddProductComponent } from '../components/add-product/add-product.component';
import { LoginComponent } from '../components/login/login.component';
import { LoginService } from '../services/login.service';
import { InfoComponent } from '../components/info/info.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { ShoppingComponent } from '../components/shopping/shopping.component';
import { CartComponent } from '../components/cart/cart.component';

//import { LoginGuardService } from '../services/login-guard.service';

const routes: Routes = [
    { path: "home", component: HomeComponent,children:[
      { path: "login", component: LoginComponent},
      { path: "about", component: AboutComponent },
      { path: "info", component: InfoComponent }
    ]}, 
    { path: "registration", component: RegistrationComponent },
    { path: "shopping", component: ShoppingComponent,children:[
        { path: "cart", component: CartComponent},
        { path: "products", component: ProductsComponent },
    ]},
    
    
    // ,{ path: "top-product", component: TopProductComponent, canActivate: [LoginService] },
    // { path: "products", component: ProductsComponent },//, canActivate: [LoginService]
    // { path: "add-product", component: AddProductComponent, canActivate: [LoginService] },
    { path: "orders", component: OrdersComponent},  //, children: [
    //     { path: "old", component: OldOrdersComponent },
    //     { path: "new", component: NewOrdersComponent }
    // ] },
    // { path: "contact-us", component: ContactUsComponent },
    // { path: "admin", loadChildren: "./admin.module#AdminModule" },
    { path: "", pathMatch: "full", redirectTo: "home" } // pathMatch = רק אם קיימת מחרוזת ריקה בלבד
    // { path: "**", component: Page404Component } // חייב להיות אחרון ברשימה
    //{ path: "about", component: AboutComponent },
//{ path: "login", component: LoginComponent },
];



@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})]
})
export class RoutingModule { }
