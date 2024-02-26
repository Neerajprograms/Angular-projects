import { Component } from '@angular/core';
import {CurdService} from './curd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  product:any[] = []
  constructor(public cs:CurdService){

    this.cs.getData().subscribe((data:any)=>this.product=data);
  }

  remove(id:number)
  {
    console.log(id)
    let d = confirm ("Are you sure");
    if(d)
    {
      this.cs.deleteData(id).subscribe((data:any)=>this.product = data)
      window.location.reload()
    }
  
  }
  

}
