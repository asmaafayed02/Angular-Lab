import { Component ,ViewChild, AfterViewInit} from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductServiceService } from './services/product-service.service';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private productService: ProductServiceService){}
  @ViewChild(ProductsComponent)RenderProuct:ProductsComponent | undefined;
  // ngAfterViewInit(){
  //   console.log(this.RenderProuct?.renderValues());
  //   console.log(this.RenderProuct?.render());
    
  // }
  render(){
    this.RenderProuct?.renderValues()
    
    // console.log(this.RenderProuct?.render());
    
  }
  // add(){
  // //  const  product = {name: }
  //   this.productService.addProduct({ID:5,Name:"product 5",Quantity:19,Price:190,Img:"../../assets/ac12a8bc89b841deeedfd5f0cd6fc828.jpg"})
  // }
}
