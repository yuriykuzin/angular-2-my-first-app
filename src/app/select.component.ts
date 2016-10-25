import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Account } from './account';

@Component({
    selector: 'my-select',
    template: `
      <div class="b-mainbox__first-column">
        <div class="b-menu__header">
          <span class="b-menu__header__number">№ счета</span>Управляющий</div>
        <ul class="b-menu">
          <div *ngFor="let acc of accounts"> 
            <li [class.b-item_selected]="acc === innerSelectedAcc" (click)="onSelect(acc)" class="b-item">
              <span class="b-item__account">
                <span class="b-item__account__number" [class.b-item_selected__account__no-dashed]="acc === innerSelectedAcc">
                  {{acc.id}}
                </span>
              </span>
              <span class="b-item__account__name">{{acc.name}}</span></li><br>
          </div>    
        </ul>
      </div> 
    `,
    styleUrls: ['./app/select.component.css']
})
export class MySelectComponent  {

    // The internal data model
    @Input() accounts: Account[] = [];
    @Input() innerSelectedAcc: Account;
    @Output() valueChanged: EventEmitter<any> = new EventEmitter();
    onSelect(acc: Account): void {
        this.innerSelectedAcc = acc;
        this.valueChanged.emit(this.innerSelectedAcc);
    }
}

