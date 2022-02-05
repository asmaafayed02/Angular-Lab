import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../Shared Classes and types/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  productArray =[
    {ID:1,Name:"product 1",Quantity:2,Price:99,Img:"../../assets/ac12a8bc89b841deeedfd5f0cd6fc828.jpg"},
    {ID:2,Name:"product 2",Quantity:5,Price:9,Img:"../../assets/ac12a8bc89b841deeedfd5f0cd6fc828.jpg"},
    {ID:3,Name:"product 3",Quantity:7,Price:90,Img:"../../assets/ac12a8bc89b841deeedfd5f0cd6fc828.jpg"},
    {ID:4,Name:"product 4",Quantity:9,Price:19,Img:"../../assets/ac12a8bc89b841deeedfd5f0cd6fc828.jpg"}
  ]

  // productsArrayWatcher:BehaviorSubject<IProduct[]> = new BehaviorSubject(this.productArray);
  // productArrayListenr = this.productsArrayWatcher.asObservable();
  GetAllProducts(){
    return this.productArray;
    // return this.productArrayListenr;
  }
  // addProduct(product:IProduct){
  //   this.productArray.push(product);
  //   this.productsArrayWatcher.next(this.productArray)
  // }
  GetProductById(prdId:number){
    var product =this.productArray.find(({ID})=>{
      // console.log(ID,prdId);
      return ID === prdId
    })    
    if (product === undefined || isNaN(prdId)) {
      return null;
    }
     return product;
  }
 
}
