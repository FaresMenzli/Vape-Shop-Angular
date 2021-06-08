import { ServiceProductService } from './../service-product.service';
import { Product } from './../Model/Product';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input()Product:Product ;
  constructor(private Service : ServiceProductService , private router:Router) { }

  ngOnInit(): void {

  }
Delete(id:number){

  this.Service.deleteProduct(id).subscribe(data=>{
    console.log(data) ;
  })
  window.location.reload();





}
}
