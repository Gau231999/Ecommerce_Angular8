import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './components/cart/cart.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GoogleLoginComponent } from './components/google-login/google-login.component';
import { SocialLoginModule, AuthServiceConfig ,GoogleLoginProvider} from 'angular4-social-login';

let config = new AuthServiceConfig(
  [
    {
      id : GoogleLoginProvider.PROVIDER_ID,
      provider : new  GoogleLoginProvider("792767392890-ecp51rltsoil9ecdm6pesmkpcap7a9dr.apps.googleusercontent.com")
    }
  ]
)
export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ContactUsComponent,
    GoogleLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
