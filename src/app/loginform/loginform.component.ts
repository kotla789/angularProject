import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterFormService } from '../register-form.service';
// import { timeLog } from 'console';
// import { setTimeout } from 'timers';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
gendertypeHasError=true;
submitted=false;
courseHasError=true;
courses=['Html', 'Css', 'Javascript', 'Angular'];
gender=['Male', 'Female', 'Other']
userModel=new User('', 0, 'sai', 'default','sai@gmail.com', 'default',false,false,false);
  constructor(private _regservice:RegisterFormService, private _router:Router) { }

  ngOnInit(): void {
  }
validategender(value:any){
  if(value==='default'){
this.gendertypeHasError=true;
}
else{
  this.gendertypeHasError=false;
}
}
validatecourse(value:any){
if(value==='default'){
this.courseHasError=true;
}
else{
  this.courseHasError=false;
}
}
onSubmit(){
  this._regservice.check(this.userModel).subscribe(
    data =>{
      if(data.length === 1)
      {
        alert("you have alreadyused ths email")
      }
      else if(data.length === 0)
      {
        this.submitted = true;
        this._regservice.register(this.userModel).subscribe(
          data =>{
            console.log("data stored successfully")
            this._router.navigate(['/login']);
          },
          error => {
            console.log("error :"+ error)
          }
        )
      }
    },
    error => console.log('Error!',error)
  )
}
}
