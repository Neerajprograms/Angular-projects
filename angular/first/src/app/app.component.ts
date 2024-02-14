import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  count:number = 0;

  clickcount:number = 0;

  isEven  = "0";

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
    }

  }

  reset()
  {

    this.count = 0;
    this.clickcount = 0;
    this.checkEvenOdd();
    this.checkdisabledNot();
    this.checkzero();

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
    }



  }
}
