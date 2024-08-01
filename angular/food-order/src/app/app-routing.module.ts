import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const neeraj: Routes = [

  {path : "home", component : AppComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(neeraj)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
