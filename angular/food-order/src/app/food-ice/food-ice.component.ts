import { Component } from '@angular/core';

@Component({
  selector: 'app-food-ice',
  templateUrl: './food-ice.component.html',
  styleUrl: './food-ice.component.css'
})
export class FoodIceComponent {

  DarckIce = "https://lh3.googleusercontent.com/dJyDWSiaxIKx14qZxH00zBpWeFy-6g9kaBFwD_x5OknyIhuXkv4NSf8uGScJ8i7Ltb4bYXCOa3UwjYAk_K-tmp9DJOKDfNIYmKUo_nX-Kw=w150-rw";
  DarkIceTitle = "Darck Ice Cream";
  Price1 = "₹70";

  
  White = "https://media.istockphoto.com/id/1326143969/photo/bowl-with-vanilla-ice-cream-balls.jpg?s=612x612&w=0&k=20&c=WxEriNEK7yW7F4AWImLQRrpco-R_bdDYEQoyhigu9fc=";
  WhiteTitle = "vanilla ice cream";
  Price2 = "₹80";


  RainBow = "https://media.istockphoto.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=612x612&w=0&k=20&c=ddtPNEZXCa4kr40sSz9a8IQnh_9QKZb6SNoJvS0Za1Q=";
  RainBowTitle = "Rainbow ice cream";
  Price3 = "₹130";


  Cone = "https://media.istockphoto.com/id/663910012/photo/vanilla-chocolate-and-pistachio-ice-cream.jpg?s=612x612&w=0&k=20&c=9ioNQdFm5lvnCrxMNtPOeUENwHRMN3wu7BUnbngklNs=";
  ConeTitle = "Cone Ice Cream";
  Price4 = "₹40"

  Strawberry = "https://media.istockphoto.com/id/170940477/photo/ice-cream.jpg?s=612x612&w=0&k=20&c=ykgZnjJW7_K115M2eOjdNrGUCXpi3KF1uhCx6cTYYsw=";
  StrawberryTitle = "strawberry ice cream"
  Price5 = "₹60"
  

  Mango = "https://media.istockphoto.com/id/1456234806/photo/mango-ice-cream-served-in-cup-isolated-on-grey-background-top-view-of-indian-and-bangladesh.jpg?s=612x612&w=0&k=20&c=Uks87rmzZT5tQtD48aRG9S-EUqSBTlAlkpOKgLUlIe4=";
  MangoTitle = "Mango Ice Cream";
  Price6 = "₹85";

  Pista = "https://media.istockphoto.com/id/800853362/photo/salted-caramel-ice-creams-on-blue-plate.jpg?s=612x612&w=0&k=20&c=Kb4bSGQ6HzHlvMAd3TtH5O88Ux21SSVEQ9xr_z3iXUk=";
  PistaTitle = "Pista Ice Cream";
  Price7 = "₹85";


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
    
    alert(`Your Order added, Your Item :: ${this.DarkIceTitle} ; quantity :: ${this.count1} , Total RS :: ${this.count1 * 40}`);

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
    
    alert(`Your Order added, Your Item :: ${this.WhiteTitle} ; quantity :: ${this.count2} ; Total RS :: ${this.count2 * 40}`);

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
    
    alert(`Your Order added, Your Item :: ${this.RainBowTitle} ; quantity :: ${this.count3} ; Total RS :: ${this.count3 * 50}`);

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
    
    alert(`Your Order added, Your Item :: ${this.ConeTitle} ; quantity :: ${this.count4} ; Total RS :: ${this.count4 * 30}`);

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
    
    alert(`Your Order added, Your Item :: ${this.StrawberryTitle} ; quantity :: ${this.count5} ; Total RS :: ${this.count5 * 15}`);

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
    
    alert(`Your Order added, Your Item :: ${this.MangoTitle} ; quantity :: ${this.count6} ; Total RS :: ${this.count6 * 40}`);

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
    
    alert(`Your Order added, Your Item ::  ${this.PistaTitle} ; quantity :: ${this.count7} ; Total RS :: ${this.count7 * 55}`);

    this.itemsselect++;

    this.count7 = 0;

    }
  }
}
