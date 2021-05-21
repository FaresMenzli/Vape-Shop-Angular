import { Product } from './../Model/Product';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Product

  constructor() { }

  ngOnInit(): void {
    this.product= new Product ()
  }
  addProduct(ProductForm : NgForm){

    this.product=ProductForm.value
    console.log(this.product)
  }
  submit({value,valid}:{value: Product,valid: boolean}){
    this.product=value;
    console.log(this.product)
  }

}
