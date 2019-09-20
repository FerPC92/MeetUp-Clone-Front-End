import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { MainService } from '../services/main.service';
import {  Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

 

  form:object= {
    _id : "",
    eventGroup:"" ,
    eventName:"",
    eventPlace : "",
    eventTakePlaceAt : "",
    eventAdress : "",
    eventFromHour : "",
    eventToHour : "",
    eventDescription : "",
    eventImg : "",
    eventOrganizer : "",
    eventDate : ""
  }


  editEvent(){
    this._mainService.editEvent(this.form)
    console.log(this.form)
     setTimeout(()=> { this._router.navigateByUrl('/home') }, 3000); 
    
  }

  constructor(public _routeActive : ActivatedRoute, public _mainService : MainService, public _router :Router) { }

  ngOnInit() {
    this._routeActive.paramMap.subscribe( (params)=> {
       let id = params.get("id");
       this.form["_id"] = id
       
    });
  
    
  }

}
