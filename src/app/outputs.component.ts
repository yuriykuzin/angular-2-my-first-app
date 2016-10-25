import { Component, Input } from '@angular/core';
import { Account } from './account';

@Component({
  selector: 'my-outputs',
  template: `
    <div *ngIf="account" class="b-outputs">
      <div class="b-outputs__outputs-name">Сегодня ваш депозит бы составил</div>        
      <div class="b-outputs__outputs-text" id="output2">{{formatCurrency(sliderValue * account.mult1)}}</div>              
      <div class="b-outputs__clearfloat"></div>
      <div class="b-outputs__outputs-name">За год при повторении вклада, заработали бы</div>        
      <div class="b-outputs__outputs-text" id="output3">{{formatCurrency(sliderValue * account.mult2)}}</div>
    </div>
  `,
  styleUrls: ['./app/outputs.component.css']
})

export class MyOutputsComponent {
  @Input()
  account: Account;
  @Input()
  sliderValue: number;
  formatCurrency(value: number): string {
    return String(Math.round(value)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' $';
  }
}
