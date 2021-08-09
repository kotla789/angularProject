import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecondForm } from './second-form';


@Injectable({
  providedIn: 'root'
})
export class LoginFormService {
  _Url='http://localhost:3000/api/check';
  constructor(private _http:HttpClient) { 

  }
  enroll(second:SecondForm){
   return this._http.post<any>(this._Url,second);
  }
}


