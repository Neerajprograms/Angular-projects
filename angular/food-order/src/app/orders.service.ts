import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ordercount = 0;

  constructor() { }

  sendData(data:any) 
  {

    this.ordercount = data;
  }

  getData(): any 
  {
    return this.ordercount;
    
  }

}
