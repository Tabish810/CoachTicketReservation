import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Http } from '@angular/http';
import { CnicPipe } from '../pipes/cnic.pipe' ;
import { CustomerNamePipe} from '../pipes/customer-name.pipe' ;
@Component({
  selector: 'app-show-all-records',
  templateUrl: './show-all-records.component.html',
  styleUrls: ['./show-all-records.component.css']
})
export class ShowAllRecordsComponent implements OnInit {

  constructor(private service: HttpService) { }
  
  ngOnInit() {
    this.get();
  }
  myData;
  get() {
    var url = 'getAllRecords';
    this.service.getData(url).subscribe(data1 => {
      console.log(data1, "data from db")
      this.myData = data1.data
    },
      err => {
        console.log(err, "error")
      }
    )
  }



}
