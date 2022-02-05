import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { DiscountOffers } from '../Shared Classes and types/Enums';
import { ICategory, IProduct } from '../Shared Classes and types/Interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private  ProductServiceService: ProductServiceService) { 
    this.Discount = DiscountOffers['15%']
    this.StoreName ='card title'
    this.StoreLogo ='../../assets/ac12a8bc89b841deeedfd5f0cd6fc828.jpg'
    this.ProductList =[{ID:1,Name:"product 1",Quantity:2,Price:99,Img:"../../assets/ac12a8bc89b841deeedfd5f0cd6fc828.jpg"}]
    this.CategoryList =[{"ID":1,'Name':"women"},{"ID":2,'Name':"men"}]
    this.ClientName ='client'
    this.IsPurshased =true
    // this.onep={}

  }
  Discount:DiscountOffers ;
  StoreName:string;
  StoreLogo:string;
  ProductList:IProduct[];
  CategoryList:ICategory[];
  ClientName:string;
  IsPurshased:boolean;
  onep:IProduct | null |undefined;

  ngOnInit(): void {
  }
  toggleTab(){
    this.IsPurshased = !this.IsPurshased;
  }
  renderValues(){
    return this.ProductList = this.ProductServiceService.GetAllProducts()
    //  this.ProductServiceService.GetAllProducts().subscribe(result => this.ProductList = result)
  }
  render(id: number) {
    console.log(this.ProductServiceService.GetProductById(id));
    
   this.onep = this.ProductServiceService.GetProductById(id)
   return this.onep
  // console.log(this.onep);
  
  }
  
}
