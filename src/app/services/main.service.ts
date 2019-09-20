import { Injectable } from '@angular/core';
import{ApiService} from '../services/api.service'
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  isLogged:boolean = false;

  registerMsg:object;

  loginCorrect:object;

  loginIncorrect:object;

  createEventMsg:object;

  editEventMsg:object;

  allEvents:object[] = [];
  
  individualEvent:object[] = [];

  userName:string;

  flagUserRegisteredOnEvent:boolean = false;

  constructor(public _apiService : ApiService, public _router :Router) { 
    this.getEvents()
    this.userName = localStorage.getItem('name')
    if(this.userName != undefined){
      this.isLogged = true
    }
    console.log(this.isLogged)
   
  }


  register(nameReg:string,userNameReg:string,passwordReg:string){
    this._apiService.post(`http://localhost:3000/register`,{"userName":nameReg,"userEmail": userNameReg, "userPassword": passwordReg}).subscribe((response)=>{
      //console.log(response) 
      this.registerMsg = response["message"]
      //console.log(this.registerMsg)
    })
  }

  checkLogin(){
    if(localStorage.getItem('token') === null){
      return (this.isLogged = false)
    } else {
      return (this.isLogged = true)
    }
  }


  login(userLog:string,passLog:string){
    this._apiService.post(`http://localhost:3000/login`,{"userEmail": userLog, "userPassword": passLog}).subscribe((response)=>{
      //console.log(response)

      if(localStorage.getItem('token') === null && response["message"] === "Login correct"){
        this.isLogged = true
        this.loginIncorrect = {};
        localStorage.setItem('token',response["token"]);
        localStorage.setItem('userID',response["userID"]);
        localStorage.setItem('name',response["name"]);
        localStorage.setItem('admin',response["admin"]);
        this.loginCorrect = response;
        //console.log(this.loginCorrect)
        this._router.navigateByUrl('/home');
      } else {
        this.loginIncorrect = response["message"]
      }
      //console.log(this.isLogged)

    })
  }

  getEvents(){

    this._apiService.get(`http://localhost:3000/events`).subscribe(response => { 

        
  
        for(let i=0 ; i < response.length ; i++){
        
           this.allEvents.push(response[i])
        }
        /*  console.log(this.allEvents)  */
      })
      /* this.allEvents = [] */
      
      
  }


  getIndividualEvent(id){
    this._apiService.get(`http://localhost:3000/events/${id}`).subscribe(response => { 

        
  
        for(let i=0 ; i < response.length ; i++){
        
           this.individualEvent.push(response[i])
        }
           console.log(this.individualEvent)  
      })
      this.individualEvent =[];
  }

  addUserToEvent(userID:string,eventID:string){
    
        let body={
          "userID" : userID,
          "eventID" : eventID
        }
          this._apiService.put(`http://localhost:3000/addMemberToEvent`,body).subscribe(response => {
                console.log(response)
                //prueba para que se actualice el numero de asistentes al añadirse a un evento sin refrescar, volvemos a invocar la funcion que carga toda la pag
                this.getIndividualEvent(eventID)
          });
    
  }

  deleteUserFromEvent(userID:string,eventID:string){

    let body={
      "userID" : userID,
      "eventID" : eventID
    }
    this._apiService.put(`http://localhost:3000/deleteMemberForEvent`,body).subscribe(response => {
          /* console.log(response) */
         this.getIndividualEvent(eventID)
          

    })
  }

  createEvent(data){
    this._apiService.post(`http://localhost:3000/createEvent`,data).subscribe((response)=>{
      /* console.log(response) */ 

       this.createEventMsg = response["message"] 
     
    })

  }

  editEvent(body){
  
        this._apiService.put(`http://localhost:3000/update`,body).subscribe(response => {
          console.log(response) 
          this.editEventMsg = response["message"] 
        
        })

  }

  deleteEvent(id:string){
    this._apiService.delete(`http://localhost:3000/deleteEvent/${id}`).subscribe(response => { 

       console.log(response)
       setTimeout(()=> { this._router.navigateByUrl('/home') }, 3000);
       setTimeout(()=> { window.location.reload()}, 4000);
       
      })
      

  }


}
