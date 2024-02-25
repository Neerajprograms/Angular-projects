import { Component } from '@angular/core';

@Component({
  selector: 'app-food-biryanis',
  templateUrl: './food-biryanis.component.html',
  styleUrl: './food-biryanis.component.css'
})
export class FoodBiryanisComponent {

  imgdosa = "https://lh3.googleusercontent.com/P5z0XqPUsaf9bOHisBBOY8smg1JHzLDX7SzA92pc6Cwtbp0o96xIXxRL862sG6hUjsTjLkPWCZse-ceDu-Yz-nHWpqhLXQbaE3mOpV-S=w150-rw"

  biryanititle = "Chicken Biryani";

  priceD = "₹240";

  
  samosa = "https://lh3.googleusercontent.com/vVveOMMItm8ByuA1CAfNEUI_O8r7P4kc4KhU9mHQaS6IlWukDMNXKni-9HMBMFRYCPUbr6N_P-DcVM9ijgtMm0Z5sevCoiX1kmdTUV-Q=w150-rw"
  samosatitle = "Chicken Wings";
  priceS = "₹140";


  puri = "https://lh3.googleusercontent.com/7sJyBacgjo-OEHNhV_T8wOs_D8O46lFkfL9owV-Gq9CQK_pVWQ4a91ZV2YNkdivMai9hHIJcdLVEr9TMDol0nFK7uhTdLiXNJOqJETSnTg=w150-rw"

  purititle = "Chaap"

  PriceP = "₹250"


  IDLI = "https://lh3.googleusercontent.com/yOd7BxSUGUUXRvAlDdH0EeB69x8lqyJuXQNbH01f9SB9spTHzPjVTnCymbX3vYJVb-H9HbKiQzjguJzG-7vShxQToU9hj9r51p3vTplhIA=w150-rw"
  IDLITITLE = "Butter Chicken"
  PriceI = "₹130"

  TEA = "https://lh3.googleusercontent.com/m5GYpvE2FFXra0CeoBgdpMTY91EgmKwGmL4n51T1sPZ9JCqpRC7qnSq8VBDU4CN3Y0j-WGrhKesDLOcvrVn7vvRRbcuq9xVy3NNvu_TZfA=w150-rw"
  TEATITLE = "Rolls"
  PriceT = "₹159"
  

  SandWich = "https://lh3.googleusercontent.com/lfpTL3RbJgsthtJLks_e4bWMp4rNpCbi8lDhvhgZKy4v_vxETOaEf0tz1fm8aAI8ACYdGYKujxRvGNrZbgfsVYt7lPR8j--j5kpHmwSG=w150-rw";
  SandwichTitle = "Parota"
  PriceS = "₹95"

  Fish = "https://lh3.googleusercontent.com/5Ccc2VH9ShfI3ICy-zU_U6GoA9K_SA8sQDI2vHG80nn8Yqhqn_vqcp-IEFiwN4nHZXlQjDDAlIoG2NlWFFgMUU25FhZPSACYochH9OZl=w150-rw";
  Fishtitle = "Fish";
  Price6 = "₹145"


  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  count5 = 0;
  count6 = 0;
  count7 = 0;

  total = 0;

  iteamcount = 0 ;

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
    
    // alert(`Your Order added, Your Item :: ${this.biryanititle} quantity :: ${this.count1} Total RS :: ${this.count1 * 240}`);

    this.itemsselect++;

    this.iteamcount = this.count1;

    this.total = this.count1 * 240;

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
    
    // alert(`Your Order added, Your Item :: ${this.samosatitle} quantity :: ${this.count2} Total RS :: ${this.count2 * 140}`);

    this.itemsselect++;
    this.iteamcount = this.count2;

    this.total = this.count2*140;  

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
    
    // alert(`Your Order added, Your Item :: ${this.purititle} quantity :: ${this.count3} Total RS :: ${this.count3 * 250}`);

    this.itemsselect++;
    this.iteamcount = this.count3;

    this.total = this.count3*250;

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
    
    // alert(`Your Order added, Your Item :: ${this.IDLITITLE} quantity :: ${this.count4} Total RS :: ${this.count4 * 130}`);

    this.itemsselect++;
    this.iteamcount = this.count4;

    this.total = this.count4*130;

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
    
    // alert(`Your Order added, Your Item :: ${this.TEA} quantity :: ${this.count5} Total RS :: ${this.count5 * 159}`);

    this.itemsselect++;
    this.iteamcount = this.count5;

    this.total = this.count5*159;

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
    
    // alert(`Your Order added, Your Item :: ${this.Fishtitle} quantity :: ${this.count6} Total RS :: ${this.count6 * 145}`);

    this.itemsselect++;
    this.iteamcount = this.count6;

    this.total = this.count6*145;

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
    
    // alert(`Your Order added, Your Item  :: ${this.SandwichTitle} quantity :: ${this.count7} Total RS :: ${this.count7 * 95}`);

    this.itemsselect++;
    this.iteamcount = this.count7;

    this.total = this.count7*95;

    this.count7 = 0;

    }
  }
}
