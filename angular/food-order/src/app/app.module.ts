import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodHeadarComponent } from './food-headar/food-headar.component';
import { FoodFooterComponent } from './food-footer/food-footer.component';
import { FoodBodyComponent } from './food-body/food-body.component';
import { FoodCarouselComponent } from './food-carousel/food-carousel.component';
import { FoodTiffinsComponent } from './food-tiffins/food-tiffins.component';
import { FoodBiryanisComponent } from './food-biryanis/food-biryanis.component';
import { FoodIceComponent } from './food-ice/food-ice.component';
import { FoodChineeseComponent } from './food-chineese/food-chineese.component';
import 'bootstrap/dist/css/bootstrap.min.css'

@NgModule({
  declarations: [
    AppComponent,
    FoodHeadarComponent,
    FoodFooterComponent,
    FoodBodyComponent,
    FoodCarouselComponent,
    FoodTiffinsComponent,
    FoodBiryanisComponent,
    FoodIceComponent,
    FoodChineeseComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
