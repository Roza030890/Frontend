import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { BeverageComponent } from './beverage/beverage.component';
import { OffersComponent } from './offers/offers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    BeverageComponent,
    OffersComponent,
    ContactUsComponent,
    HomeComponent,
    HeaderComponent,
    // HttpClientModule
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
