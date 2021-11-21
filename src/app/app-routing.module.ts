import { AppComponent } from './app.component';
import { GoogleLoginComponent } from './components/google-login/google-login.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'login', component: GoogleLoginComponent },
  { path: '', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
