import { ServiceProductService } from './../service-product.service';
import { Product } from './../Model/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  listProduct: Product[];
  productdetails: Product;

  constructor(
    private route: ActivatedRoute,
    private ServiceProductService: ServiceProductService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.ServiceProductService.getProductbyId(this.id).subscribe(
      (data: Product) => (this.productdetails = data)
    );

    console.log(this.productdetails);

    console.log(this.route.snapshot);
  }
}
