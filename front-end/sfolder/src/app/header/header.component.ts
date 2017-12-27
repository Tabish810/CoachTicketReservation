import { Component, OnInit} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title = 'Header';
  constructor(
    private router :Router, 
    private flashMessage : FlashMessagesService,
    private authService :AuthService){}

  onLogoutClick(){
    this.authService.logout();
    this.router.navigate(["/"]);
    return false;
  }

  ngOnInit() {
  }

}
