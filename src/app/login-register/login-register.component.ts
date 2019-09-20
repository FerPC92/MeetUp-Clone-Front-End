import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor(public _routeActive : ActivatedRoute, public _mainService : MainService) { }

  container = document.getElementById('container');

  flag:boolean= false

  msg:string = "";
  

  singUp(){
    this.flag = true
  }

  singIn(){
    this.flag  = false
  }
  regName:string;
  regUser:string;
  regPass:string;

  userLogin:string;
  passLogin:string;

  register(){
    this._mainService.register(this.regName,this.regUser,this.regPass)
  }

  login(){
    this._mainService.login(this.userLogin,this.passLogin)
  }


  ngOnInit() {
    
    this._routeActive.paramMap.subscribe( (params)=> {
       this.msg = params.get("msg");
     
    });
    


  }


}
