import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductServiceService } from './services/product-service.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DiscountProductsComponent } from './discount-products/discount-products.component';
import { NoDiscountProductComponent } from './no-discount-product/no-discount-product.component';
import { CommentsComponent } from './comments/comments.component';
import { RfRegisterComponent } from './rf-register/rf-register.component';
import { NotesComponent } from './notes/notes.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    NotFoundComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    RegisterComponent,
    LoginComponent,
    DiscountProductsComponent,
    NoDiscountProductComponent,
    CommentsComponent,
    RfRegisterComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
