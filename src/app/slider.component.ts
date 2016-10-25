import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
  // Empty intentionally
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MySliderComponent),
    multi: true
};

@Component({
    selector: 'my-slider',
    template: `
    <div class="custom-div-slider" (window:resize)="handleSlider()">
      <div class="custom-div-slider__popup">{{formatCurrency(value)}}</div>
      <input type="range" (onload)="handleSlider()" (change)="handleSlider()" 
        (input)="handleSlider()" [(ngModel)]="value" class="custom-div-slider__input" id="myslider" max="4000" />
    </div>
    `,
    styleUrls: ['./app/slider.component.css'],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class MySliderComponent implements ControlValueAccessor, OnInit {

    // The internal data model
    private innerValue: string;

    // Placeholders for the callbacks which are later providesd
    // by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;
    private slider: any;
    private sliderStyle: any;
    private sliderPopup: any;
    ngOnInit() {
      this.slider = document.querySelector('#myslider');
      let st = document.createElement('style');
      st.id = 's_myslider';
      document.head.appendChild(st);
      this.sliderStyle = document.getElementById('s_myslider');
      this.sliderPopup = document.querySelector('.custom-div-slider__popup');
      this.slider.value = 1000;
      this.handleSlider();
    }

    // get accessor
    get value(): string {
        return this.innerValue;
    };

    // set accessor including call the onchange callback
    set value(v: string) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    // From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }
    // From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }
    // From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
    handleSlider() {
      let gradValue = this.slider.value / this.slider.getAttribute('max') * this.slider.clientWidth;
      this.sliderStyle.textContent = '#myslider::-webkit-slider-runnable-track { background-size: ' +
        (gradValue + (this.slider.value < 2000 ? 1 : -1)) + 'px 100%, 100% }';
      let koeff = this.slider.value / this.slider.getAttribute('max') * 16;
      this.sliderPopup.style.left = gradValue - koeff - 28 + 'px';
    }
    formatCurrency(val: number): string {
        return String(Math.round(val)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' $';
    }
}
