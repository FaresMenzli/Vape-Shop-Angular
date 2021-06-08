import { Product } from './Model/Product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {

  url ='http://localhost:3000/productlist/'

  constructor( private http:HttpClient) { }

  getProducts( ){
    /* const productList = [
      {id: 1,name: "1st", category:"Atomiseur" ,description: "desc 1", photo:"https://www.lepetitvapoteur.com/29842-thickbox/kit-aegis-max-geek-vape.jpg", price: 18, rating:5 },
      {id:2,name: "2",category:"liquid" , description: "desc 2",photo:"https://www.lepetitvapoteur.com/29842-thickbox/kit-aegis-max-geek-vape.jpg", price: 21,rating:5 },
      {id:3,name: "3",category:"Atomiseur", description: "desc 3",photo:"https://www.lepetitvapoteur.com/31243-large_default/kit-aegis-legend-200w-geek-vape.jpg", price: 16,rating:5 },


    ] */
return  this.http.get<Product[]>('http://localhost:3000/productlist')

  }
  getProductbyId(i : number){

    return this.http.get<Product>('http://localhost:3000/productlist/'+i)

  }
  /* getLength(){
   return Object.keys(this.http.get<Product[]>('http://localhost:3000/productlist')).length

  } */

  postProduct(product: Product){

    return this.http.post(this.url , product)

  }
  deleteProduct(id:number){
    return this.http.delete('http://localhost:3000/productlist/'+id)
  }
  updateProduct(product: Product){

    return this.http.put('http://localhost:3000/productlist/'+product.id, product)
  }
}
