import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { FilterPipe } from '../pipes/filter.pipe';
import { Http } from '@angular/http';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {PassValidateService} from '../services/pass-validate.service';
@Component({
  selector: 'app-set-driver-info',
  templateUrl: './set-driver-info.component.html',
  styleUrls: ['./set-driver-info.component.css']
})
export class SetDriverInfoComponent implements OnInit {
  public a : any;
  public b :any;
  public c : any;
  public d : any;
  public e : any;
  public f :any;
  public g : any;
  variable;
  //visible = false;
  public modelInput :any;
  toggleDiv(datamodel){
   // this.visible = !this.visible;
    //this.visible=this.visible;
    this.variable=datamodel._id;
    this.catchData(datamodel);
    this.modelInput.coach_number = this.a;
    this.modelInput.name = this.b;
    this.modelInput.coach_name = this.c;
    this.modelInput.cnic = this.d;
    this.modelInput.phone_no = this.e;
    this.modelInput.address = this.f;
  }
  editPopUpRecords(){
    this.updateDriversRecord(this.variable,this.modelInput);
  }

  updateDriversRecord(id,input1){
    var url = 'updateDriversRecord/'+id;
  console.log(input1);
    this.service.editData(url,input1).subscribe(data1 => {
      
      if(data1.statusCode !== 505 && this.validateForm()===true){
        console.log(data1, "!Update data to db","statusCode:200")
        this.flashMessages.show("Data has been updated",{cssClass:'alert-success',timeout:3000 });        
      }
      else{
        this.flashMessages.show("Error While Updating",{cssClass:'alert-danger',timeout:3000 });        
        console.log(data1, "Data not updated")
      }
    },
      err => {
        // console.log(err, "error")
      }
    )
  }
  
  mydata;
  get() {
    var url = 'getDriversRecord';
    this.service.getData(url).subscribe(data1 => {
      console.log(data1, "data from db")
      this.mydata = data1.data
    },
      err => {
        console.log(err, "error")
      }
    )
  }
  public input :any;
  catchData(data){
    console.log("the data has been catched")
    this.a = data.coach_number;
    this.b = data.name;
    this.c = data.coach_name;
    this.d = data.cnic;
    this.e = data.phone_no;
    this.f = data.address;
  }
  
  constructor(private service: HttpService 
    , private router : Router, private flashMessages : FlashMessagesService,
    private passValidateService : PassValidateService ) { 
    this.input={
      "_id" : "",
      "coach_number":"",
      "name":"",
      "coach_name":"",
      "cnic":"",
      "phone_no":"",
      "address":""
    }
    this.modelInput={
      "coach_number":"",
      "name":"",
      "coach_name":"",
      "cnic":"",
      "phone_no":"",
      "address":""
    }
   
  }
 
  
  deleteData(id){
    var url = 'deleteDriversRecord/'+id;
    this.service.deleteData(url).subscribe(data1 => {
      if(data1.statusCode === 200){
        this.flashMessages.show("Data has been deleted",{cssClass:'alert-success',timeout:3000 });
      }
      else{
        this.flashMessages.show("Data has not been Deleted",{cssClass:'alert-danger',timeout:3000 });
      }   
    },
      err => {
        console.log(err, "error")
      }
    )
  }

// validate model form 
validateForm(){
  if(!this.passValidateService.validateDriverModelInput(this.modelInput)){
    this.flashMessages.show("Please Fill All Fields",{cssClass:'alert-danger',timeout:3000 });
    return false;
  }else{
    return true;
  }
}

  onClick(mydata){
    this.deleteData(mydata._id);
    //console.log(mydata._id);
  }

  modelClick(){
    console.log(this.modelInput);
  }

  ngOnInit() {
    this.get();
   // this.deleteData(this.mydata);
  }
}
