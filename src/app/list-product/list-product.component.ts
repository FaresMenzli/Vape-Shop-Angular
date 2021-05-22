import { ServiceProductService } from './../service-product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './../Model/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  listProduct: Product[];
  search: string;
  list:Product[]

  constructor(private ServiceProductService: ServiceProductService) {}

  ngOnInit(): void {
    this.ServiceProductService.getProducts().subscribe(
      (data: Product[]) => (this.listProduct = data)
    );
    this.list=[
      {id: 1,name: "1st", category:"Atomiseur" ,description: "T-shirt 1", photo:"https://www.lepetitvapoteur.com/29842-thickbox/kit-aegis-max-geek-vape.jpg", price: 18, rating:5 },
      {id:2,name: "2",category:"Atomiseur" , description: "T-shirt 2",photo:"Url photo", price: 21,rating:5 },
      {id:3,name: "3",category:"Atomiseur", description: "T-shirt 3",photo:"Url photo", price: 16,rating:5 },
    ]
    console.log(this.list)

  }
  /* te(){
  if (this.priceMax != null){
    this.listProduct= this.listProduct.filter(product => product.price >= this.priceMax);
  console.log(this.listProduct)
  }
} */
}
