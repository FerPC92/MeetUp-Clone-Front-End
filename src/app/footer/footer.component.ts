import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  closeSesion(){
    localStorage.clear();
    window.location.reload()
    /* this._router.navigateByUrl('/home')  */
  }

  constructor(public _router :Router) { }

  ngOnInit() {
  }

}
