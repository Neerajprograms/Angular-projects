import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  
  constructor(private as:AuthService,private router:Router){}
  submit(email:any, password:any, form:any) 
  {
    console.log(email, password, form)
    if ((email.control.value.trim() == '') || (password.control.value.trim() == '')) 
    {
      alert("please fill the form")
    }
    else 
    {
      this.as.signup(email.control.value, password.control.value)
        .then((val) => {
          console.log(val);
          this.router.navigate(['/Login'])
        })
      .catch((err)=>console.log(err))
    }
   
  }
}
