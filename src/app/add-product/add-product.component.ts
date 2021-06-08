import { ServiceProductService } from './../service-product.service';
import { Product } from './../Model/Product';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  /* sent=false */
  product:Product

  constructor(private Service : ServiceProductService , private router:Router) { }

  ngOnInit(): void {
    this.product= new Product ()
  }
  addProduct(ProductForm : NgForm){

    this.product=ProductForm.value
    console.log(this.product)
    this.Service.postProduct(this.product).subscribe()
    setTimeout(() => {
      this.router.navigate(['listproduct'])
    }, 600);



  }
  submit({value,valid}:{value: Product,valid: boolean}){
    this.product=value;
    console.log(this.product)
    /* this.sent= true */

  }
  /* saveData(){
    this.product=ProductForm.value
    console.log(this.product)
    this.Service.postProduct(this.product).subscribe()

  } */

}
