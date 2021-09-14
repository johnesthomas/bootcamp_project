import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latitude =  -8.05428;
  longitude = -34.8813;
  zoom = 14

  constructor(private _el: ElementRef) {
    
   }

  ngOnInit(): void {
    
  }

  goToTexts() {
      document.body.scrollTop = 840;
      document.documentElement.scrollTop = 840;
     
   }
   
  }