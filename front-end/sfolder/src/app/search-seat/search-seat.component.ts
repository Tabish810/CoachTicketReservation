import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Http } from '@angular/http';
import {TimingsPipe} from '../pipes/timings.pipe';
import {DatePipe} from '../pipes/date.pipe';

@Component({
  selector: 'app-search-seat',
  templateUrl: './search-seat.component.html',
  styleUrls: ['./search-seat.component.css']
})
export class SearchSeatComponent implements OnInit {

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
