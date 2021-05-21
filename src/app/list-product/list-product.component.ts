import { Component, OnInit } from '@angular/core';
import { Product } from './../Model/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listProduct : Product []



  constructor() { }

  ngOnInit(): void {
    this.listProduct=[
      {name: "1st", category:"Atomiseur" ,description: "T-shirt 1", photo:"Url photo", price: 18, rating:5 },
      {name: "2",category:"Atomiseur" , description: "T-shirt 2",photo:"Url photo", price: 21,rating:5 },
      {name: "3",category:"Atomiseur", description: "T-shirt 3",photo:"Url photo", price: 16,rating:5 },
    ]
  }

}
