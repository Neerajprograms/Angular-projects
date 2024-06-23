import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { PagesModule } from './pages/pages.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    PagesModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
    

  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
