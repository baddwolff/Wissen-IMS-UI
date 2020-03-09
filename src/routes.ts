import {Routes} from '@angular/router';
import {LoginComponent} from './app/login/login.component';
import {AppComponent} from './app/app.component';
import {HomeComponent} from './app/commons/home/home.component';
import {DashboardComponent} from './app/dashboard/dashboard.component';
import {CreateProductComponent} from './app/Products/create-product/create-product.component';
import {ProductListComponent} from './app/Products/product-list/product-list.component';
import {OrderListComponent} from './app/Orders/order-list/order-list.component';
import {SaleListComponent} from './app/Sales/sale-list/sale-list.component';
import {CreateOrderComponent} from './app/Orders/create-order/create-order.component';
import {CreateSaleComponent} from './app/Sales/create-sale/create-sale.component';
import {ProductDetailsComponent} from './app/Products/product-details/product-details.component';
import {ProductResolver} from './app/commons/resolvers/product.resolver';
import {NotFoundComponent} from './app/commons/not-found/not-found.component';
import {ProductListResolver} from './app/Products/product-list/product-list.resolver';
import {OrderListResolver} from './app/commons/resolvers/order-list.resolver';
import {SalesListResolver} from './app/commons/resolvers/sales-list.resolver';


export const appRoutes:Routes =[
  { path:'login' , component: LoginComponent },
  { path: 'home', component: HomeComponent, children:[
      {path:'dashboard',component:DashboardComponent},
      {path: 'product/add',component:CreateProductComponent},
      {path: 'product/view/:id', component:ProductDetailsComponent, resolve:{product: ProductResolver}},
      {path: 'product/view', component:ProductListComponent, resolve:{productList: ProductListResolver}},
      {path: 'order/view',component:OrderListComponent, resolve:{orderList: OrderListResolver} },
      {path: 'sales/view',component:SaleListComponent, resolve:{salesList: SalesListResolver} },
      {path: 'order/add',component:CreateOrderComponent },
      {path: 'sales/add',component:CreateSaleComponent},
      {path: '404',component:NotFoundComponent},
      {path: '',redirectTo:'dashboard',pathMatch:'full'}
    ]},
  { path:'',redirectTo:'home',pathMatch:'full'}



]
