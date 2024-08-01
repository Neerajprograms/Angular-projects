import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ALL-IN-ONE';
 
  image!:any;
  updateData(item:any)
  {
    this.image = item;
  }

  hederdom = false;
  Calculaterform= false;
  welcome = true;
  welcommessage = false;
  childtoparent = false;

  tochildname!:string;
  tochildpassword!:any;

  output = 0;

  parentchild()
  {
    if(this.hederdom == false)
    {
      this.hederdom = true;
      this.welcome = false;
      this.welcommessage = false;
      this.Calculaterform = false;
      this.childtoparent = false;
      document.body.classList.add('neeraj')
      
    }
    else
    {
      this.hederdom = false;
      this.welcommessage = true;
      document.body.classList.remove('neeraj')
    }
  }

  Calculater()
  {
    if(this.Calculaterform == false)
    {
      this.Calculaterform = true;
      this.welcome = false;
      this.welcommessage = false;
      this.hederdom = false;
      this.childtoparent = false;
      document.body.classList.remove('neeraj')
    }
    else
    {
      this.Calculaterform = false;
      this.welcommessage = true;
      document.body.classList.add('neeraj')

    }

  }

  cildparent()
  {
    if(this.childtoparent == false)
    {
      this.childtoparent = true;
      this.welcome = false;
      this.welcommessage = false;
      this.hederdom = false;
      this.Calculaterform = false;
      document.body.classList.add('neeraj')
    }
    else
    {
      this.childtoparent = false;
      this.welcommessage = true;
      document.body.classList.remove('neeraj')

    }

  }

  addtwo()
  {

    if(this.output >= 0)
    {
      this.output +=2;
    }
    else
    {
      this.output = 0;
    }
    
  }

  addfive()
  {
    if(this.output >= 0)
{
  this.output +=5;
}
else
{
  this.output = 0;
}
    
  }

  removetwo()
  {
    if(this.output <= 0)
    {
      this.output = 0;
    }
    else
    {
      this.output -=2;
    }
    
  }

  removefive()
  {
    if(this.output <= 0)
    {
      this.output = 0;
    }
    else
    {
      this.output -=5;
    }
  }
}
