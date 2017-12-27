import { Component, OnInit } from '@angular/core';
import {PassValidateService} from '../services/pass-validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { HttpService } from '../http.service'


@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  public input :any;
    constructor(private passValidateService : PassValidateService,
      private flashMessage : FlashMessagesService,private service : HttpService) {
      this.input={
        "current_pass":"",
        "new_pass":"", 
        "confirm_pass":""
      }
     }
  
  type1= "password";
  show1 = false;
  type2= "password";
  show2 = false;
  type3= "password";
  show3 = false;
  
  showOldPass = function(){
    this.show1 = !this.show1;
    if (this.show1){
        this.type1 = "text";
    }
    else {
        this.type1 = "password";
    }
  }
  showNewPass = function(){
    this.show2 = !this.show2;
    if (this.show2){
        this.type2 = "text";
    }
    else {
        this.type2 = "password";
    }
  }
  showConfirmPass = function(){
    this.show3 = !this.show3;
    if (this.show3){
        this.type3 = "text";
    }
    else {
        this.type3 = "password";
    }
  }

  // update form 
  updatePassword(input1){
    var url = 'passUpdate';
  console.log(input1);
    this.service.editData(url,input1).subscribe(data1 => {
      
      if(data1.statusCode !== 505 && data1.statusCode !== 404){
        console.log(data1, "!Update data to db","statusCode:200")
        this.flashMessage.show("Successfully Updated",{cssClass:'alert-success',timeout:3000 });
      }
      else{
        this.flashMessage.show("Error while updating",{cssClass:'alert-danger',timeout:3000 });
        console.log(data1, "Data not save")
      }
    },
      err => {
        // console.log(err, "error")
      }
    )
  }


  validateForm(){
    if(!this.passValidateService.validatePassword(this.input)){
      this.flashMessage.show("Please Fill All Fields",{cssClass:'alert-danger',timeout:3000 });
      return false;
    }else if(this.input.new_pass !== this.input.confirm_pass){
     // this.updatePassword();  
     this.flashMessage.show("Password Not Matched",{cssClass:'alert-danger',timeout:3000 });
    return false;  
    }
    
  }
  onClick(){
    if(this.input.current_pass !== this.input.new_pass){
      if(this.input.new_pass===this.input.confirm_pass){
          this.updatePassword({
            current_pass:this.input.current_pass,
            new_pass:this.input.new_pass
          });
      }
    }
  }
  ngOnInit() {
    
  }

}
