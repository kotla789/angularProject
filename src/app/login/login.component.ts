import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormService } from '../login-form.service';
import { SecondForm } from '../second-form';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = ''
secondModel=new SecondForm( '','');
  constructor(private _loginForm:LoginFormService,private _router:Router) { }

  ngOnInit(): void {
  }
onSubmit(){
this._loginForm.login(this.secondModel).subscribe(
  data => {
    if(data.length === 0){
      alert("not a registered user")
    }
    else if(data.length === 1){
      console.log(data)
      this.name = data[0].name
      this._router.navigate([`/welcome/${this.name}`]);
    }
  },
  error => console.log('Error!',error)
)
}
}
