import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MenuComponent } from '../components/menu/menu.component';
import { HomeComponent } from '../components/home/home.component';
import { FormsModule } from "@angular/forms";
import { HeadingComponent } from '../components/heading/heading.component';
import { ProductsComponent } from '../components/products/products.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { AboutComponent } from '../components/about/about.component';
import { RouterModule } from "@angular/router";
import { RoutingModule } from './routing.module';
import { Page404Component } from '../components/page404/page404.component';
import { OrdersComponent } from '../components/orders/orders.component';
import { OldOrdersComponent } from '../components/old-orders/old-orders.component';
import { NewOrdersComponent } from '../components/new-orders/new-orders.component';
import { ThumbnailComponent } from '../components/thumbnail/thumbnail.component';
import { TopProductComponent } from '../components/top-product/top-product.component';
import { HttpClientModule  } from "@angular/common/http";
import { ZeroSymbolPipe } from '../pipes/zero-symbol.pipe';
import { ColoredDirective } from '../directives/colored.directive';
import { AddProductComponent } from '../components/add-product/add-product.component';
import { NgReduxModule, NgRedux } from "ng2-redux";
import { Store } from '../redux/store';
import { Reducer } from '../redux/reducer';
import { ProductsService } from '../services/products.service';
import { LoginComponent } from '../components/login/login.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule, MatButtonModule, MatSelectModule,MatCheckboxModule, MatProgressSpinnerModule } from "@angular/material";
import { InfoComponent } from '../components/info/info.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { ShoppingComponent } from '../components/shopping/shopping.component';
import { OrdersService } from '../services/orders.service';
import { CustomersService } from '../services/customers.service';
import { CartsService } from '../services/carts.service';
import { ValidatePasswordDirective } from '../directives/validate-password.directive';
import { CartComponent } from '../components/cart/cart.component';
import { LoginService } from '../services/login.service';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, MenuComponent, HomeComponent, HeadingComponent, ProductsComponent, ContactUsComponent, AboutComponent, Page404Component, OrdersComponent, OldOrdersComponent, NewOrdersComponent, ThumbnailComponent, TopProductComponent, ZeroSymbolPipe, ColoredDirective,ValidatePasswordDirective, AddProductComponent, LoginComponent,InfoComponent,RegistrationComponent,ShoppingComponent,CartComponent],
  imports: [BrowserModule, NgReduxModule, FormsModule, 
            RouterModule, RoutingModule, HttpClientModule,
            BrowserAnimationsModule, MatInputModule,MatButtonModule, MatCheckboxModule,MatSelectModule, MatProgressSpinnerModule],
  bootstrap: [LayoutComponent]
}) 
export class AppModule { 
    
    public constructor(redux: NgRedux<Store>, productsService: ProductsService, ordersService: OrdersService, customersService: CustomersService,loginservice:LoginService,
        cartsService:CartsService) {
        
        redux.configureStore(Reducer.reduce, new Store());
        productsService.getAllProducts();
        ordersService.getAllOrders();
        customersService.getAllCustomers();
        cartsService.getAllCarts();
        //loginservice.logout();
    }
}