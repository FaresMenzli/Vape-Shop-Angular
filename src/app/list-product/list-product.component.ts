import { ServiceProductService } from './../service-product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './../Model/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listProduct : Product []
  search: string;



  constructor( private ServiceProductService:ServiceProductService) { }

  ngOnInit(): void {
    this.listProduct=this.ServiceProductService.getProducts()



  }
  /* te(){
  if (this.priceMax != null){
    this.listProduct= this.listProduct.filter(product => product.price >= this.priceMax);
  console.log(this.listProduct)
  }
} */
}
