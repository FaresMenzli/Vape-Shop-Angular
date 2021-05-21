import { ServiceProductService } from './../service-product.service';
import { Product } from './../Model/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:number
  listProduct : Product []



  productdetails:Product

  constructor( private route : ActivatedRoute ,private ServiceProductService : ServiceProductService) { }

  ngOnInit(): void {
    /* this.listProduct=[
      {id: 1,name: "1st", category:"Atomiseur" ,description: "T-shirt 1", photo:"https://www.lepetitvapoteur.com/29842-thickbox/kit-aegis-max-geek-vape.jpg", price: 18, rating:5 },
      {id:2,name: "2",category:"Atomiseur" , description: "T-shirt 2",photo:"Url photo", price: 21,rating:5 },
      {id:3,name: "3",category:"Atomiseur", description: "T-shirt 3",photo:"Url photo", price: 16,rating:5 },
    ] */
    this.listProduct =this.ServiceProductService.getProducts()
    this.id =this.route.snapshot.params.id
    this.productdetails= this.listProduct.find(x => x.id == this.id)

    console.log(this.productdetails)


    console.log(this.route.snapshot)



  }

}
