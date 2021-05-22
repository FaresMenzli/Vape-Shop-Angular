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
  pressed:boolean
  l:number


  constructor(private ServiceProductService: ServiceProductService) {}

  ngOnInit(): void {

  /*   this.ServiceProductService.getProducts().subscribe(
      (data: Product[]) => (this.listProduct = data)
    ); */
    this.ServiceProductService.getProducts().subscribe(
      data => {this.listProduct = data; this.l = data.length }



      /* (data: Product[]) => (this.l = data.length) */
    );
    console.log(this.l)

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
like(i:number){
  if (this.pressed){
  this.pressed=!this.pressed
  console.log("pressed le"+ this.pressed)
  console.log("class gray")
  return "heart-shape-gray"
  /*  console.log(this.ServiceProductService.getLength()) */

}
  else{
    this.pressed=!this.pressed
    console.log("pressed ey"+ this.pressed)
  console.log("class red")

    return "heart-shape"

     /* console.log(this.ServiceProductService.getLength()) */



  }


}
}
