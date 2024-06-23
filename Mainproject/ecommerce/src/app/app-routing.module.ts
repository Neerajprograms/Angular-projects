import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';



const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"Login", component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:"cart",component:CartComponent},
  {path:'contact',component:ContactComponent},
  {path:"product/:id",component:ProductComponent},
  {path:'produts',component:ProductsComponent},
  {path:"**", component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
