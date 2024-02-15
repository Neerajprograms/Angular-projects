import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodHeadarComponent } from './food-headar/food-headar.component';
import { FoodFooterComponent } from './food-footer/food-footer.component';
import { FoodBodyComponent } from './food-body/food-body.component';
import { FoodCarouselComponent } from './food-carousel/food-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodHeadarComponent,
    FoodFooterComponent,
    FoodBodyComponent,
    FoodCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
