import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { BeverageComponent } from "./beverage/beverage.component";
import { FoodComponent } from "./food/food.component";
import { HomeComponent } from "./home/home.component";
import { OffersComponent } from "./offers/offers.component";
import { HeaderComponent } from "./header/header.component";

const route: Routes = [
    { path: '', component: HomeComponent },
    { path: 'food', component: FoodComponent },
    { path: 'beverage', component: BeverageComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'header', component: HeaderComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(route, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
// export class routingComponents = [ FoodComponent, BeverageComponent, OffersComponent ] 
