import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardBodyComponent } from './dashboard-body/dashboard-body.component';
import { SearchSeatComponent } from './search-seat/search-seat.component';
import { ReserveSeatComponent } from './reserve-seat/reserve-seat.component';
import { CancelSeatComponent } from './cancel-seat/cancel-seat.component';
import { SaveDriverInfoComponent } from './save-driver-info/save-driver-info.component';
import { SetDriverInfoComponent } from './set-driver-info/set-driver-info.component';
import { SetCoachInfoComponent } from './set-coach-info/set-coach-info.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ShowAllRecordsComponent } from './show-all-records/show-all-records.component';
import { RouterModule , Routes } from '@angular/router';
import { SaveCoachInfoComponent } from './save-coach-info/save-coach-info.component';

import {HttpService} from './http.service';
import { ImageService } from './imagess/shared/image.service';
import {PassValidateService} from './services/pass-validate.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';


import { IndexComponent } from './index/index.component';
import { FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { CoachNoPipe } from './pipes/coach-no.pipe';
import { TimingsPipe } from './pipes/timings.pipe';
import { CnicPipe } from './pipes/cnic.pipe';
import { DatePipe } from './pipes/date.pipe';
import { CustomerNamePipe } from './pipes/customer-name.pipe';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';


const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
   },
  {
    path: 'dashboard-body',
   // canActivate:[AuthGuard],
    component: DashboardBodyComponent,
   },
   {
    path: 'search-seat',
    component: SearchSeatComponent,
    //canActivate:[AuthGuard]
   },
   {
    path: 'reserve-seat',
    component: ReserveSeatComponent,
    //canActivate:[AuthGuard]
   },
   {
    path: 'cancel-seat',
    component: CancelSeatComponent,
    //canActivate:[AuthGuard]
   },
   {
    path: 'save-coach-info',
    component: SaveCoachInfoComponent,
    //canActivate:[AuthGuard]
   },
   {
    path: 'save-driver-info',
    component: SaveDriverInfoComponent,
    //canActivate:[AuthGuard]
   },
   {
    path: 'set-driver-info',
    component: SetDriverInfoComponent,
    //canActivate:[AuthGuard]
   },
   
   {
    path: 'set-coach-info',
    component: SetCoachInfoComponent,
    //canActivate:[AuthGuard]
   },
   
  {
    path:'set-password', 
    component : SetPasswordComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'show-all-records',
    component: ShowAllRecordsComponent,
    //canActivate:[AuthGuard]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardBodyComponent,
    SetPasswordComponent,
    ShowAllRecordsComponent,
    SearchSeatComponent,
    ReserveSeatComponent,
    CancelSeatComponent,
    SaveDriverInfoComponent,
    SetDriverInfoComponent,
    SetCoachInfoComponent,
    SaveCoachInfoComponent,
    IndexComponent,
    FilterPipe,
    CoachNoPipe,
    TimingsPipe,
    CnicPipe,
    DatePipe,
    CustomerNamePipe,
  
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule,
    BrowserModule,
    HttpModule
   
  ],
  providers: [ImageService,HttpService,
  AuthService, PassValidateService,FlashMessagesService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
