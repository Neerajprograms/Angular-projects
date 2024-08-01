import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { ChildParentComponent } from './child-parent/child-parent.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    ChildParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
