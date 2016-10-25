import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Account, ACCOUNTS } from './account';

@Component({
  selector: 'my-main-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  accounts: Account[] = ACCOUNTS;
  selectedAcc: Account = this.accounts[0];
  sliderValue = 1000;
  ngOnInit() {
    this.adjustArrow();
  }
  onAccChanged($event: any) {
    this.selectedAcc = $event;
  }
  adjustArrow() {
    let mainbox = <HTMLElement>(document.querySelector('.b-mainbox'));
    mainbox.style.backgroundPosition = document.querySelector('.b-mainbox__first-column').clientWidth + 'px';
  }
}
