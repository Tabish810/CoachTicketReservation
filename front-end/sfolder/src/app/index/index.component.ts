import { Component, OnInit} from '@angular/core';
import { ImageService } from '../imagess/shared/image.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {PassValidateService} from '../services/pass-validate.service';
import {AuthService} from '../services/auth.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
   public input :any;

  visibleImages : any[] = [];
  source:string;
  constructor(private imageService : ImageService ,private router :Router, 
    private flashMessage : FlashMessagesService,
    private passValidateService : PassValidateService,private authService :AuthService) { 
   
      this.visibleImages = this.imageService.getImages(); 
      this.input = {
        "user_name":"",
        "password" : ""
      }
    }


 
//login 

onLoginSubmit(){
 const user = {
      user_name : this.input.user_name,
      password : this.input.password
  }
  this.authService.authenticateUser(user).subscribe(data=>{
    console.log(data);
      if(data.success){     
         this.authService.storeUserData(data.token , data.data.user_name);
         //console.log(data.data.user_name)
         this.router.navigate(["/dashboard-body"]);
    }else {
      this.flashMessage.show("Email or Password is Invalid",{cssClass:'alert-danger',timeout:3000 });  
    }
  })
}

validateForm(){
  if(!this.passValidateService.validateLogin(this.input)){
    this.flashMessage.show("Please Fill All Fields",{cssClass:'alert-danger',timeout:3000 });
    return false;
  }
}
  ngOnInit() {
  }

}
