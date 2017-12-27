import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HttpService} from '../http.service'
import {Http} from '@angular/http'
import { clone } from 'lodash';
import {FlashMessagesService} from 'angular2-flash-messages';
import {PassValidateService} from '../services/pass-validate.service';


@Component({
  selector: 'app-reserve-seat',
  templateUrl: './reserve-seat.component.html',
  styleUrls: ['./reserve-seat.component.css']
})
export class ReserveSeatComponent implements OnInit {
  public input : any ; 
  constructor(private service:HttpService, private passValidateService : PassValidateService,
    private flashMessage : FlashMessagesService) {
    this.input={
      ticketno: "",
      coachname: "",
      customer_name: "",
      from: "Karachi",
      to: "",
      departure_time: "",
      coach_time: "",
      seat_no: "",
      fare: "",
      advance: "",
      remaining: "",
      phone: "",
      cnic: "",
      date: ""
    }
     
  }

  newdata;
  addData(){
      var url = 'AllRecords';
      //var dataPost;
      console.log(this.input);
      this.service.addData(url,this.input).subscribe(data1 => {
        if(data1.statusCode === 200){
          this.flashMessage.show("Data has been Saved",{cssClass:'alert-success',timeout:3000 });
        }
        else{
          this.flashMessage.show("Data has not been Saved",{cssClass:'alert-danger',timeout:3000 });
        }
      },
        err => {
          console.log(err, "error")
        }
      )
    }
  onClick(){
    //console.log(this.input);
     this.addData();    
  }
  mydata1;
  getDloc() {
    var url = 'getDloc';
    this.service.getData(url).subscribe(data1 => {
      console.log(data1, "data from db")
      this.mydata1 = data1.data
    },
      err => {
        console.log(err, "error")
      }
    )
  }
  mydata2;
  getTime() {
    var url = 'getTime';
    this.service.getData(url).subscribe(data1 => {
      console.log(data1, "data from db")
      this.mydata2 = data1.data
    },
      err => {
        console.log(err, "error")
      }
    )
  }
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
  editItemsForm: boolean = false;
  itemsForm: boolean = false;
  editedItems: any ={};
  showEditItemsForms(myData1){
    if(!myData1){
      this.itemsForm = false;
      return;
    }
    this.editItemsForm = true;
    this.editedItems = clone(myData1)
  }

  // validation
  validateForm(){
    if(!this.passValidateService.validateReserveseat(this.input)){
      this.flashMessage.show("Please Fill All Fields",{cssClass:'alert-danger',timeout:3000 });
      return false;
    }
  }
  ngOnInit() {
     this.getDloc()
     this.getTime()
     this.getCoachName()
  }

}
