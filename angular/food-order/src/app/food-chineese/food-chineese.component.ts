import { Component } from '@angular/core';

@Component({
  selector: 'app-food-chineese',
  templateUrl: './food-chineese.component.html',
  styleUrl: './food-chineese.component.css'
})
export class FoodChineeseComponent {


  Nooddils = "https://lh3.googleusercontent.com/ITIyOJfAaqffW8EDCwf-96w67YH0nHJIAy9pkymZoHwT0okZj3KYG9yNUZ-BEMGgFV1koIil2hoU5VPIxXgmvfqKZOCl7OPL3VcATLWd6w=w150-rw";
  NooddilsTitle = "Nooddils";
  Price1 = "₹90";

  
  Fries = "https://lh3.googleusercontent.com/tqgcnHmq_4Z_osleYmeHOCqr4s3vWCTjSMVXOo17pCIKkj68MNjbVSyERfNtsQ1cFtLjI9FX693v2Is99cWGfss2eNi2cuKLwlVBXo8_2Q=w150-rw"
  Friestitle = "Fries";
  Price2 = "₹40";


  Pasta = "https://lh3.googleusercontent.com/WVHoYCBmmDpOuFeFor3oVI6xrYTxS4nQfPtAlI8RKSDefInsspbRKI4BmLzDjMADrb6_2yfsqT6AY7oVCoVedHlB5ujXa-lYJ2Kwkrc=w150-rw"
  Pastatitle = "Pasta";
  Price3 = "₹80";


  ChineseNooddils = "https://media.istockphoto.com/id/935986200/photo/chinese-noodles-wok-isolated-in-white-background.jpg?s=612x612&w=0&k=20&c=Hiff4n0HEADjwBdId0IlsJfNWpyLQTv4aXaNcpJpnC0="
  ChineseNooddilsTitle = "Chinese Nooddils";
  Price4 = "₹130";

  ChilliGarlicNooddles = "https://media.istockphoto.com/id/1252605665/photo/chilli-garlic-hakka-noodles-in-black-bowl-isolated-on-white-background-indo-chinese.jpg?s=612x612&w=0&k=20&c=lesS8Wt5JVauAqjVh9uPfoiGr1ZjsnjHWZyKw3zLg2E="
  ChilliGarlicNooddlesTitle = "Chilli Garlic Nooddles"
  Price5 = "₹150"
  

  shrimpscampi = "https://media.istockphoto.com/id/872621988/photo/shrimps-with-rice-noodles-and-vegetables.jpg?s=612x612&w=0&k=20&c=BRuuPIBSlSyWqlAXDFkfmSj3U-zGrmIsIaBLcNViCvw=";
  shrimpscampiTitle = "shrimp scampi"
  Price6 = "₹155"

  DuckFry = "https://media.istockphoto.com/id/1281083664/photo/kkanpunggi-or-korean-spicy-garlic-fried-chicken-on-black-plate-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ctSUGjjilTY6o-ECns5_JR8s_HmCkPVXZCNr4K9nq-I=";
  DuckFryTitle = "Duck Fry"
  Price7 = "₹205"

  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;
  count6 = 0;
  count7 = 0;

  iteamcount!:any;

  decr1()
  {
    if(this.count1 ==0)
    {
      this.count1 = 0;
    }
    else
    {
      this.count1--;
    }
    
  }

  incr1()
  {
    this.count1++;
  }

  decr2()
  {
    if(this.count2 ==0)
    {
      this.count2 = 0;
    }
    else
    {
      this.count2--;
    }
    
  }

  incr2()
  {
    this.count2++;
  }


  decr3()
  {
    if(this.count3 ==0)
    {
      this.count3 = 0;
    }
    else
    {
      this.count3--;
    }
    
  }

  incr3()
  {
    this.count3++;
  }

  decr4()
  {
    if(this.count4 ==0)
    {
      this.count4 = 0;
    }
    else
    {
      this.count4--;
    }
    
  }

  incr4()
  {
    this.count4++;
  }

  decr5()
  {
    if(this.count5 ==0)
    {
      this.count5 = 0;
    }
    else
    {
      this.count5--;
    }
    
  }

  incr5()
  {
    this.count5++;
  }

  decr6()
  {
    if(this.count6 ==0)
    {
      this.count6 = 0;
    }
    else
    {
      this.count6--;
    }
    
  }

  incr6()
  {
    this.count6++;
  }

  decr7()
  {
    if(this.count7 ==0)
    {
      this.count7 = 0;
    }
    else
    {
      this.count7--;
    }

  }

  incr7()
  {
    this.count7++;
  }


  /*addming funcaion*/

  itemsselect!:any;

  add1()
  {
    

    if(this.count1==0)
    {

    }
    else
    {
    
    alert(`Your Order added, Your Item :: ${this.NooddilsTitle}; quantity :: ${this.count1}; Total RS :: ${this.count1 * 90}`);

    this.itemsselect++;

    this.iteamcount = this.count1;  

    this.count1 = 0;
    }
    
  }

  add2()
  {
    
    if(this.count2==0)
    {

    }
    else
    {
    
    alert(`Your Order added, Your Item  :: ${this.Friestitle}; quantity :: ${this.count2}; Total RS :: ${this.count2 * 40}`);

    this.itemsselect++;

    

    this.count2 = 0;

    }
  }

  add3()
  {
    
    if(this.count3==0)
    {

    }
    else
    {
    
    alert(`Your Order added, Your Item :: ${this.Pastatitle}; quantity :: ${this.count3}; Total RS :: ${this.count3 * 80}`);

    this.itemsselect++;

    this.count3 = 0;

    }
  }

  add4()
  {
    
    if(this.count4==0)
    {

    }
    else
    {
    
    alert(`Your Order added, Your Item :: ${this.ChineseNooddilsTitle}; quantity :: ${this.count4}; Total RS :: ${this.count4 * 130}`);

    this.itemsselect++;

    this.count4 = 0;

    }
  }

  add5()
  {
    if(this.count5==0)
    {

    }
    else
    {
    
    alert(`Your Order added, Your Item :: ${this.ChilliGarlicNooddlesTitle}; quantity :: ${this.count5}; Total RS :: ${this.count5 * 159}`);

    this.itemsselect++;

    this.count5 = 0;

    }
  }

  add6()
  {
    
    if(this.count6==0)
    {

    }
    else
    {
    
    alert(`Your Order added, Your Item :: ${this.shrimpscampiTitle}; quantity :: ${this.count6}; Total RS :: ${this.count6 * 155}`);

    this.itemsselect++;

    this.count6 = 0;

    }
  }
  

  add7()
  {
    if(this.count7==0)
    {

    }
    else
    {
    
    alert(`Your Order added, Your Item :: ${this.DuckFryTitle}; quantity :: ${this.count7}; Total RS :: ${this.count7 * 205}`);

    this.itemsselect++;

    this.count7 = 0;

    }
  }
}
