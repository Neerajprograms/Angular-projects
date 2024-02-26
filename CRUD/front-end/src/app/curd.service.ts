import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurdService {

  constructor(private hc:HttpClient) { }


  getData()
  {
    return this.hc.get('http://localhost:3000/places');
  }

  deleteData(id:number)
  {
    return this.hc.delete(`http://localhost:3000/places/${id}`);
  }
}
