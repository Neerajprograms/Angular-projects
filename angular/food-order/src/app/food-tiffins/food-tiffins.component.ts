import { Component ,Output} from '@angular/core';

@Component({
  selector: 'app-food-tiffins',
  templateUrl: './food-tiffins.component.html',
  styleUrl: './food-tiffins.component.css'
})
export class FoodTiffinsComponent {


  imgdosa = "https://lh3.googleusercontent.com/CYhFsTE8lQ7iiWywTLLlNYCRSXuQYlcEE17VBRMeZO0veGQfqspdwSFQOFltDrnL6fuNuSx3D9XbKVLQxE_ThEGSaa4u3pPe2ToB1Nw=w150-rw"

  dosatitle = "Masaladosa";

  priceD = "₹40";

  
  samosa = "https://lh3.googleusercontent.com/yKzjZXvp4x5MUvG0zJFNPYm8VvKeOjNALUayoZUwXrrgcBOllGZsn4X_d4lQ81_qQpzhQhyoB7LCri9XnpjymmNA-NB3A5NurneXXYIs=w150-rw"

  samosatitle = "Samosa";

  priceS = "₹40";


  puri = "https://lh3.googleusercontent.com/5eslRRGRf_iAGFg8GRzZqHEtQmIBuAvFbINwW5-eJYovOP-84sgwaQnGyhLyBntcXFzJgU2D86FxXlIOEY39R6mWhG_kTPgXxH2qGEHt=w150-rw"

  purititle = "Masala Puri"

  PriceP = "₹50"


  IDLI = "https://lh3.googleusercontent.com/q6tjaXpCQP91sP6GEYzCcBWkPKo3s1P_ZYbO9Y1Lcvwv28JnyoCDIozLWkgEUlqeA6evwMU1I_qpmeVkXjyRgsGi0f8XkWxMzyjcR83Q=w150-rw"
  IDLITITLE = "IDLI"
  PriceI = "₹30"

  TEA = "https://lh3.googleusercontent.com/zQx049Xd6QmM5NIAC2OXDEoMg22UByiSrbAQWgN5BmdavwAdUI83MO8P5bvX9WeG1-v1idD15s5xonByJcKQOZBBcE6HcdgLMy-8x87bSg=w150-rw"
  TEATITLE = "TEA"
  PriceT = "₹15"
  

  SandWich = "https://lh3.googleusercontent.com/lG5viW0KnhjdzbQBwo2xwCLo_1WKQOAn2wZUETnK9VgAKndm2fKeuWCmULWBcHZdFH7dS1GfIOsQwMAMu7LfrgX8_ufalUjhUrNoY9ABjw=w150-rw";
  SandwichTitle = "SandWich"
  PriceS = "₹55"

  plaindosatitle = "Plain Dosa"

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
    
    alert(`Your Order added, Your Item ${this.dosatitle} quantity : ${this.count1} Total RS ${this.count1 * 40}`);

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
    
    alert(`Your Order added, Your Item ${this.samosatitle} quantity : ${this.count2} Total RS ${this.count2 * 40}`);

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
    
    alert(`Your Order added, Your Item ${this.purititle} quantity : ${this.count3} Total RS ${this.count3 * 50}`);

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
    
    alert(`Your Order added, Your Item ${this.IDLITITLE} quantity : ${this.count4} Total RS ${this.count4 * 30}`);

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
    
    alert(`Your Order added, Your Item ${this.TEA} quantity : ${this.count5} Total RS ${this.count5 * 15}`);

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
    
    alert(`Your Order added, Your Item ${this.plaindosatitle} quantity : ${this.count6} Total RS ${this.count6 * 40}`);

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
    
    alert(`Your Order added, Your Item ${this.SandwichTitle} quantity : ${this.count7} Total RS ${this.count7 * 55}`);

    this.itemsselect++;

    this.count7 = 0;

    }
  }

}
