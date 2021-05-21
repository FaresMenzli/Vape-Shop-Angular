import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import {  RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
const routes : Routes = [
{path: 'search' , component: SearchComponent},
{path:'addproduct' ,component: AddProductComponent},
{path: 'listproduct' , component: ListProductComponent},
/*{path:'**', component: NotfoundComponent}*/
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ListProductComponent,
    AddProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
