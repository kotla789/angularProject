import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginFormService } from '../login-form.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-welocome',
  templateUrl: './welocome.component.html',
  styleUrls: ['./welocome.component.css']
})
export class WelocomeComponent implements OnInit {
  public name:any; 
  constructor(private _activate : ActivatedRoute) { }
  ngOnInit(): void {
    let dname = this._activate.snapshot.paramMap.get('name');
    this.name=dname;
  }

}
