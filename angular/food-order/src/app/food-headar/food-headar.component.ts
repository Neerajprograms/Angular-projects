import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../orders.service';

@Component({
  selector: 'app-food-headar',
  templateUrl: './food-headar.component.html',
  styleUrl: './food-headar.component.css'
})
export class FoodHeadarComponent {

  ordercount = 0;  

  constructor(public receve:OrdersService){

    this.ordercount = this.receve.getData();

    console.log(this.ordercount);

  }



    // this.ordercount = this.receve.getData();


  
  
   
}
