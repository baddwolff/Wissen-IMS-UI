import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { SidebarComponent } from './commons/sidebar/sidebar.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutModalComponent } from './commons/navbar/logout-modal/logout-modal.component';
import { CreateProductComponent } from './Products/create-product/create-product.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { LoginComponent } from './login/login.component';
// import {JQ_TOKEN} from './Services/jquery.service';

import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes';
import { HomeComponent } from './commons/home/home.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { SaleListComponent } from './Sales/sale-list/sale-list.component';
import { OrderListComponent } from './Orders/order-list/order-list.component';
import { CreateOrderComponent } from './Orders/create-order/create-order.component';
import { CreateSaleComponent } from './Sales/create-sale/create-sale.component';
import { ProductThumbnailComponent } from './Products/product-thumbnail/product-thumbnail.component';
import {SaleService} from './Services/sale.service';
import {OrderService} from './Services/order.service';
import {ProductService} from './Services/product.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import {MatAutocompleteModule, MatFormFieldModule} from '@angular/material';
import { SearchModalComponent } from './commons/navbar/search-modal/search-modal.component';
import { ProductDetailsComponent } from './Products/product-details/product-details.component';
import {ProductResolver} from './commons/resolvers/product.resolver';
import {HttpClientModule} from '@angular/common/http';
import {ProductListResolver} from './Products/product-list/product-list.resolver';
import {OrderListResolver} from './commons/resolvers/order-list.resolver';
import {SalesListResolver} from './commons/resolvers/sales-list.resolver';
import {JQ_TOKEN} from './Services/jquery.service';
import {Ng2SearchPipeModule} from 'ng2-search-filter';



let jQuery= window['$']
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    NotificationsComponent,
    AnalyticsComponent,
    DashboardComponent,
    LogoutModalComponent,
    CreateProductComponent,
    NotFoundComponent,
    LoginComponent,
    HomeComponent,
    ProductListComponent,
    SaleListComponent,
    OrderListComponent,
    CreateOrderComponent,
    CreateSaleComponent,
    ProductThumbnailComponent,
    SearchModalComponent,
    ProductDetailsComponent,



  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide : JQ_TOKEN,
      useValue : jQuery
    },
    SaleService,
    OrderService,
    ProductService,
    ProductResolver,
    OrderListResolver,
    SalesListResolver,
    ProductListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
