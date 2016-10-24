import { Component, OnInit } from '@angular/core';
import { Account } from './account';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})

export class AppComponent implements OnInit {
  private sliderValue = 1000;
  accounts = ACCOUNTS;
  selectedAcc: Account = this.accounts[0];
  
  ngOnInit() {
    this.adjustArrow();
  }
  
  onAccChanged($event: any){
    this.selectedAcc = $event;
  }
   
  adjustArrow() {
    let mainbox = <HTMLElement>(document.querySelector(".b-mainbox"));
    mainbox.style.backgroundPosition = document.querySelector(".b-mainbox__first-column").clientWidth + "px";
  }
}

let ACCOUNTS: Account[] = [
      { id: 11970, name: "Galax", mult1: 1.265, mult2: 27.432 },
      { id: 7348,  name: "Veronica", mult1: 1.12, mult2: 26.3 },
      { id: 10555, name: "Dragonfly", mult1: 0.87, mult2: 20.1 },
      { id: 10504, name: "Condor", mult1: 1.52, mult2: 35.98 },
      { id: 10469, name: "Shark_007", mult1: 0.75, mult2: 18.5 }
    ];

