import { Component, OnInit,OnChanges } from '@angular/core';
import { ImageService } from '../imagess/shared/image.service';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent implements OnInit {

  visibleImages : any[] = [];
  source:string;
  constructor(private imageService : ImageService) { 
    this.visibleImages = this.imageService.getImages(); 
  }

  ngOnInit() {
  
  }

}
