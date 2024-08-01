import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ordercount :any;

  constructor() { }

  sendData(data:any) 
  {

    data = this.ordercount ;
  }

  getData()
  {
    return this.ordercount;
    
  }

}
