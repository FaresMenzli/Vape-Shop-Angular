import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {

  constructor() { }

  getProducts(){
    const productList = [
      {id: 1,name: "1st", category:"Atomiseur" ,description: "desc 1", photo:"https://www.lepetitvapoteur.com/29842-thickbox/kit-aegis-max-geek-vape.jpg", price: 18, rating:5 },
      {id:2,name: "2",category:"liquid" , description: "desc 2",photo:"https://www.lepetitvapoteur.com/29842-thickbox/kit-aegis-max-geek-vape.jpg", price: 21,rating:5 },
      {id:3,name: "3",category:"Atomiseur", description: "desc 3",photo:"https://www.lepetitvapoteur.com/31243-large_default/kit-aegis-legend-200w-geek-vape.jpg", price: 16,rating:5 },


    ]

    return productList
  }
}