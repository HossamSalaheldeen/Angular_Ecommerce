import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    NavbarComponent,
    NotfoundComponent,
    ProductItemComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
