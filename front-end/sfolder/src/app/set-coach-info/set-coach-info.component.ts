import { Component, OnInit } from '@angular/core';
import { CoachNoPipe } from '../pipes/coach-no.pipe';
import { HttpService } from '../http.service'
import { Http } from '@angular/http';
import {Router,ActivatedRoute} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {PassValidateService} from '../services/pass-validate.service';
@Component({
  selector: 'app-set-coach-info',
  templateUrl: './set-coach-info.component.html',
  styleUrls: ['./set-coach-info.component.css']
})
export class SetCoachInfoComponent implements OnInit {
  variable;
  public a : any;
  public b :any;
  public c : any;
  public d : any;
  public e : any;
 // visible = false;
 catchData(data){
  console.log("the data has been catched")
  this.a = data.coach_no;
  this.b = data.coach_name;
  this.c = data.timings;
  this.d = data.destination_loc;
  this.e = data.fare;
} 
 public modelInput :any;
  toggleDiv(datamodel){
    this.catchData(datamodel);
    this.modelInput.coach_no = this.a;
    this.modelInput.coach_name = this.b;
    this.modelInput.timings = this.c;
    this.modelInput.destination_loc = this.d;
    this.modelInput.fare = this.e;
    // this.visible = !this.visible;
     this.variable=datamodel._id;
  }
  
  editPopUpRecords(){
    this.updateCoachRecord(this.variable,this.modelInput);
    console.log(this.modelInput)
  }
  updateCoachRecord(id,input1){
    console.log("This is an input");
    var url = 'updateCoachRecords/'+id;
  console.log(input1);
    this.service.editData(url,input1).subscribe(data1 => { 
      if(data1.statusCode !== 505 && this.validateForm()===true){
        this.flashMessage.show("Data has been updated",{cssClass:'alert-success',timeout:3000 });        
       // this.visible = !this.visible;
        console.log(data1, "!Update data to db","statusCode:200")
      }
      else{
        this.flashMessage.show("Error While Updating",{cssClass:'alert-danger',timeout:3000 });        
        console.log(data1, "Data not save")
      }
    },
      err => {
        // console.log(err, "error")
      }
    )
  }



  public input : any ;
  constructor( private service: HttpService,private router : Router,
  private route : ActivatedRoute,private flashMessage : FlashMessagesService,
private passValidateService : PassValidateService ) { 

    this.input={
      "_id" : ""
    }
    this.modelInput={
      "coach_no": "",
      "coach_name": "",
      "timings": "",
      "destination_loc": "",
      "fare": ""
    }
  }
 
  mydata;
  get() {
    var url = 'getCoachInfo';
    this.service.getData(url).subscribe(data1 => {
      console.log(data1, "data from db")
      this.mydata = data1.data
    },
      err => {
        console.log(err, "error")
      }
    )
  }
   deleteData(id){
     console.log(id+"this is an id ");
       var url = 'deleteCoachInfo/'+id;
       this.service.deleteData(url).subscribe(data1 => {
        if(data1.statusCode === 200){
          this.flashMessage.show("Data has been deleted",{cssClass:'alert-success',timeout:3000 });
        }
        else{
          this.flashMessage.show("Data has not been Deleted",{cssClass:'alert-danger',timeout:3000 });
        }
        
       },
         err => {
           console.log(err, "error")
         }
       )
     }
  onClick(myData){ 
      this.deleteData(myData._id);
      console.log(myData._id);
 }
// Coach Names/////////////////
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
///////////////////////////

 onUpdateClick(mydata){
  this.updateData(mydata._id);
  console.log(mydata._id+"it is an id of function");
  console.log(this.mydata._id+" it is an id of class")
}

//  modalClick(){
//    //this.flashMessage.show("Data has been updated",{cssClass:'alert-success',timout : 3000})
//    console.log(this.modelInput);
//  }

// get Coach Timings
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

// get Destination Locations

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

// validate model form 
validateForm(){
  if(!this.passValidateService.validateCoachModelInput(this.modelInput)){
    this.flashMessage.show("Please Fill All Fields",{cssClass:'alert-danger',timeout:3000 });
    return false;
  }else{
    return true;
  }
}
 //update Data
 updateData(id){
   console.log("it is an id"+id);
     var url = 'updateCoachRecords/'+id;
     this.service.editData(url,this.modelInput).subscribe(data1 => {
       if(data1.statusCode !== 505 && data1.statusCode ===200 && this.validateForm()===true){
        this.flashMessage.show("Data has been updated",{cssClass:'alert-success',timeout:3000 });
       }
       else{
        this.flashMessage.show("Error while updating",{cssClass:'alert-danger',timeout:3000 });
       }
     },
       err => {
         console.log(err, "error")
       }
     )
   }








  ngOnInit() {
    this.get();
    this.getDloc();
    this.getTime();  
  }

}
