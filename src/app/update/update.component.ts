import { Router } from '@angular/router';
import { ServiceProductService } from './../service-product.service';
import { Product } from './../Model/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product:Product
  updatedProduct : Product
  id:number


  constructor(private Service : ServiceProductService , private route:ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;



    this.Service.getProductbyId(this.id).subscribe(
      (data: Product) => (this.product = data)
    );

    setTimeout(() => {


console.log(this.product)
    }, 500);



  }
   updateProduct(ProductForm : NgForm){
    this.updatedProduct=ProductForm.value
    this.updatedProduct.id=this.id
    console.log(this.product)
    this.Service.updateProduct(this.updatedProduct).subscribe()
    console.log(this.product)
    console.log(this.updatedProduct)
    setTimeout(() => {
      this.router.navigate(['listproduct'])
    }, 600);



}
}
