import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';

import { Error404Component } from './error/404.component';

import { ProductsService } from './shared/products.service';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderNavComponent,
    FooterNavComponent,
    Error404Component,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'myEcom demo app devtool',
      maxAge: 25,
      logOnly: environment.production
    }),
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
