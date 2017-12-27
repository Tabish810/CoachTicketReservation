import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Http} from '@angular/http'
import {FlashMessagesService} from 'angular2-flash-messages';
import {PassValidateService} from '../services/pass-validate.service';
@Component({
  selector: 'app-cancel-seat',
  templateUrl: './cancel-seat.component.html',
  styleUrls: ['./cancel-seat.component.css']
})
export class CancelSeatComponent implements OnInit {

  public input : any ;
  
  constructor(private service:HttpService,private passValidateService : PassValidateService,
    private flashMessage : FlashMessagesService) {
    this.input={
      "ticket_number":""
          }
   }
  newdata;
    deleteData(t){
        var url = 'cancelSeat/'+t;
        console.log(url);
        this.service.deleteData(url).subscribe(data1 => {
          if(data1.statusCode === 200){
            this.flashMessage.show("Seat has been cancelled",{cssClass:'alert-success',timeout:3000 });
          }
          else{
            this.flashMessage.show("Seat has not been cancelled",{cssClass:'alert-danger',timeout:3000 });
          }
          this.newdata = data1.data
        },
          err => {
            console.log(err, "error")
          }
        )
      }
   onClick(){
     console.log(this.input);
     this.deleteData(this.input.ticket_number);
   }
  
  //validation 

  validateForm(){
    if(!this.passValidateService.validateCancelSeat(this.input)){
      this.flashMessage.show("Please Fill Required Field",{cssClass:'alert-danger',timeout:3000 });
      return false;
    }
  }
   ngOnInit() {
    
  }

}
