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
  pressed:[];
   tab=new Array();
  l:number


  constructor(private ServiceProductService: ServiceProductService) {}

  ngOnInit(): void {

    console.log(this.search)
  /*   this.ServiceProductService.getProducts().subscribe(
      (data: Product[]) => (this.listProduct = data)
    ); */
    this.ServiceProductService.getProducts().subscribe(
      data => {this.listProduct = data; this.l = data.length }


      /* (data: Product[]) => (this.l = data.length) */
    );

    console.log("len without time out"+this.l)
    setTimeout(() => {
      for (let j=0 ; j<this.l ; j++){
        this.tab[j]=false



        console.log("test")
      }
  }, 500);

  setTimeout(() => {
    console.log(this.tab)
  }, 500);








   /*  this.list=[
      {id: 1,name: "1st", category:"Atomiseur" ,description: "T-shirt 1", photo:"https://www.lepetitvapoteur.com/29842-thickbox/kit-aegis-max-geek-vape.jpg", price: 18, rating:5 },
      {id:2,name: "2",category:"Atomiseur" , description: "T-shirt 2",photo:"Url photo", price: 21,rating:5 },
      {id:3,name: "3",category:"Atomiseur", description: "T-shirt 3",photo:"Url photo", price: 16,rating:5 },
    ]
    console.log(this.list) */

  }
  /* te(){
  if (this.priceMax != null){
    this.listProduct= this.listProduct.filter(product => product.price >= this.priceMax);
  console.log(this.listProduct)
  }
} */
like(i:number){


  if (this.tab[i]){
    this.tab[i]=!this.tab[i]
   console.log("tab le"+ this.tab[i])
  console.log("class gray")
  return this.tab[i]
  /*  console.log(this.ServiceProductService.getLength()) */

}
  else{
    this.tab[i]=!this.tab[i]

     console.log("tab ey"+ this.tab[i])
  console.log("class red")
  /*console.log("length :"+i) */

    return this.tab[i]

     /* console.log(this.ServiceProductService.getLength()) */



  }


}
}
