import { ProductDetailsComponent } from './product-details/product-details.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {path: 'search' , component: SearchComponent},
  {path:'addproduct' ,component: AddProductComponent},
  {path: 'listproduct' , component: ListProductComponent},
  {path: 'listproduct/:id' , component: ProductDetailsComponent},

  /*{path:'**', component: NotfoundComponent}*/
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
