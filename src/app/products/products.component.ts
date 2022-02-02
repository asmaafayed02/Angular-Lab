import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and types/Enums';
import { ICategory, IProduct } from '../Shared Classes and types/Interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { 
    this.Discount = DiscountOffers['15%']
    this.StoreName ='card title'
    this.StoreLogo ='../../assets/ac12a8bc89b841deeedfd5f0cd6fc828.jpg'
    this.ProductList =[{ID:1,Name:"product 1",Quantity:2,Price:99,Img:"../../assets/ac12a8bc89b841deeedfd5f0cd6fc828.jpg"}]
    this.CategoryList =[{"ID":1,'Name':"women"},{"ID":2,'Name':"men"}]
    this.ClientName ='client'
    this.IsPurshased =true

  }
  Discount:DiscountOffers ;
  StoreName:string;
  StoreLogo:string;
  ProductList:IProduct[];
  CategoryList:ICategory[];
  ClientName:string;
  IsPurshased:boolean;
  ngOnInit(): void {
  }
  toggleTab(){
    this.IsPurshased = !this.IsPurshased;
  }

}
