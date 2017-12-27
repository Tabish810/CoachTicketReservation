import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HttpService} from '../http.service';
import {Http} from '@angular/http';
import {FlashMessagesService} from 'angular2-flash-messages';
import {PassValidateService} from '../services/pass-validate.service';

@Component({
  selector: 'app-save-coach-info',
  templateUrl: './save-coach-info.component.html',
  styleUrls: ['./save-coach-info.component.css']
})
export class SaveCoachInfoComponent implements OnInit {
  
  public input : any ; 

  constructor(private service:HttpService, private passValidateService : PassValidateService,
    private flashMessage : FlashMessagesService) {

    this.input={
      "coach_no" : "",
      "coach_name" : "",
      "timings" : "",
      "destination_loc" : "",
      "fare" : ""
     }
   }
   newdata;
   addCoachData(){
       var url = 'addCoachInfo';
       //var dataPost;
       this.service.addData(url,this.input).subscribe(data1 => {
         if(data1.statusCode !== 505 && data1.statusCode ===200){
          this.flashMessage.show("Data has been saved",{cssClass:'alert-success',timeout:3000 });
         }
         else{
          this.flashMessage.show("Error Data wrong data entered",{cssClass:'alert-danger',timeout:3000 });
         }
       },
         err => {
           console.log(err, "error")
         }
       )
     }
   onClick(){
     console.log(this.input);
      this.addCoachData();    
   }
   validateForm(){
    if(!this.passValidateService.validateCoachInfo(this.input)){
      this.flashMessage.show("Please Fill All Fields",{cssClass:'alert-danger',timeout:3000 });
      return false;
    }
  }
  

  ngOnInit() {
    
  }

}
