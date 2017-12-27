import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HttpService} from '../http.service'
import {Http} from '@angular/http'
import {FlashMessagesService} from 'angular2-flash-messages';
import {PassValidateService} from '../services/pass-validate.service';

@Component({
  selector: 'app-save-driver-info',
  templateUrl: './save-driver-info.component.html',
  styleUrls: ['./save-driver-info.component.css']
})  
export class SaveDriverInfoComponent implements OnInit {
  public input : any;
  constructor( private service:HttpService,private passValidateService : PassValidateService,
    private flashMessage : FlashMessagesService) { 
this.input ={

  "coach_number" : "",
  "name": "",
  "coach_name" :"" ,
  "cnic" : "" ,
  "phone_no" :"" ,
  "address" : ""  

}
  }

  // save Data
  newdata;
  addDriversData(){
      var url = 'addDriversRecord';
      //var dataPost;
      this.service.addData(url,this.input).subscribe(data1 => {
        console.log(data1.statusCode);
        if(data1.statusCode !== 505 && data1.statusCode ===200){
          this.flashMessage.show("Data has been saved",{cssClass:'alert-success',timeout:3000 });
        }
        else{
          this.flashMessage.show("Error Something given is wrong",{cssClass:'alert-danger',timeout:3000 });
        }
      },
        err => {
          console.log(err, "error")
        }
      )
    }
  onClick(){
    console.log(this.input);
     this.addDriversData();    
  }
  // validation
  validateForm(){
    if(!this.passValidateService.validateSaveDriverInfo(this.input)){
      this.flashMessage.show("Please Fill All Fields",{cssClass:'alert-danger',timeout:3000 });
      return false;
    }
  }

  //Coach Names
  mydata3;
  getCoachName() {
    var url = 'getCoach';
    this.service.getData(url).subscribe(data1 => {
      console.log(data1, "data from db")
      this.mydata3 = data1.data
    },
      err => {
        console.log(err, "error")
      }
    )
  }
  ngOnInit() {
    this.getCoachName();
  }

}
