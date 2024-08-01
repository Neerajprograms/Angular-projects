import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  
  count:number = 0;

  clickcount:number = 0;

  isEven  = "0";

  isprime = "0";

  checkEvenOdd()
  {
    if(this.count%2 === 0)
    {
      
      this.isEven = "EVEN";

    }
    else
    {
      this.isEven = "ODD";
    }

  }

  checkprim():void
  {
    if (this.count <= 1) {
      this.isprime = "Not Prime"; // Numbers less than or equal to 1 are not prime
      return;
    }
    let isPrime: boolean = true;
    for (let i = 2; i <= Math.sqrt(this.count); i++) {
      if (this.count % i === 0) {
        isPrime = false;
        break;
      }
    }
    this.isprime = isPrime ? "Prime" : "Not Prime";
  }





  checkdisabledNot()
  {
    if(this.count < 50)
    {
      this.isCountmore = false
      
    } 
    else
    {
      this.isCountmore = true;
      this.count = 50;
      alert("Value can't be more then 50")
      
    }
  }

  checkzero()
  {
    if(this.count >= 0)
    {
      this.isCountzero = false;

    }
    else 
    {
      this.isCountzero = true;
      this.count = 0;

      alert("Value can't be less then 0")
    }
  }

  isCountzero = false

  isCountmore = false




  twoadd()
  {
    
    if(this.count >= 50)
    {
      this.isCountmore = true;
      this.count  = 50;
    }
    else
    {
      this.count+=2;
      this.clickcount++;
      this.checkEvenOdd();  
      this.checkdisabledNot();
      this.checkzero();
      this.checkprim()
    }
    
  }

  fiveadd()
  {


    if(this.count >= 50)
    {
      this.isCountmore = true
      this.count  = 50;
      
    }
    else
    {
      this.count+=5;
      this.clickcount++;
      this.checkEvenOdd();
      this.checkdisabledNot();  
      this.checkzero();
      this.checkprim()
    }
  }

  eight()
  {


    if(this.count >= 50)
    {
      this.isCountmore = true
      this.count  = 50;
      
    }
    else
    {
      this.count+=8;
      this.clickcount++;
      this.checkEvenOdd();
      this.checkdisabledNot();
      this.checkzero();
      this.checkprim()
    }

  }

  reset()
  {

    this.count = 0;
    this.clickcount = 0;
    this.checkEvenOdd();
    this.checkdisabledNot();
    this.checkzero();
    this.checkprim()

  }

  tworemove()
  {

    if(this.count == 0)
    {
      this.isCountzero = true
      
    }
    else
    {
      this.count -= 2;
      this.clickcount ++;
      this.checkEvenOdd();
      this.checkdisabledNot();
      this.checkzero();
      this.checkprim()
    }
    

  }
  fivemove()
  {


    if(this.count == 0)
    {
      this.isCountzero = true
    }
    else
    {
      this.count -= 5;
      this.clickcount ++;
      this.checkEvenOdd();
      this.checkdisabledNot();
      this.checkzero();
      this.checkprim()
    }

  }
  eightremove()
  {

    if(this.count == 0)
    {
      this.isCountzero = true
    }
    else
    {
      this.count -= 8;
      this.clickcount ++;
      this.checkEvenOdd();
      this.checkdisabledNot();
      this.checkzero();
      this.checkprim()
    }



  }
}
