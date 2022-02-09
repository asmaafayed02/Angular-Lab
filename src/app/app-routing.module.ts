import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { DiscountProductsComponent } from './discount-products/discount-products.component';
// import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoDiscountProductComponent } from './no-discount-product/no-discount-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotesComponent } from './notes/notes.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { RfRegisterComponent } from './rf-register/rf-register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path:'Products',component: ProductsComponent,
  children:[
  {path:'discount',component:DiscountProductsComponent},
  {path:'noDiscount',component:NoDiscountProductComponent}]
  },
  {path:'users',component: UsersComponent},
  {path:'posts',component: PostsComponent},
  {path:'register',component: RfRegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'notes',component: NotesComponent},
  {path:'comment/:id',component:CommentsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
