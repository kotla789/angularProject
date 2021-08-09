import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User } from './user';
import { registerLocaleData } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
// export class checkService {
//   _rl = 'http://localhost:3000/api/register';
//   constructor(private _http:HttpClient) {}
//   enroll(user : User) {
//     return this._http.post<any>(this._Url, user);
//   }
// }
export class RegisterFormService {

  _Url='http://localhost:3000/api/checkifemailisalreadyused';
  _2Url='http://localhost:3000/api/register'
  constructor(private _http:HttpClient) { }
  check(user:User){
  return this._http.post<any>(this._Url, user);
  }
  register(user:User){
    return this._http.post<any>(this._2Url,user);
  }
  
}
