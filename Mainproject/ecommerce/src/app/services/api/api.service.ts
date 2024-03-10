import { Injectable } from '@angular/core';
import { apiurl } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService { 

  constructor(private hc:HttpClient) {  }

  getProducts()
  {
    return this.hc.get(`${apiurl}`)
  }

  getProduct(id:number)
  {
    return this.hc.get(`${apiurl}/${id}`)
  }

}
