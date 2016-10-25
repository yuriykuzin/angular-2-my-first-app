"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var noop = function () {
    // Empty intentionally
};
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MySliderComponent; }),
    multi: true
};
var MySliderComponent = (function () {
    function MySliderComponent() {
        // Placeholders for the callbacks which are later providesd
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    MySliderComponent.prototype.ngOnInit = function () {
        this.slider = document.querySelector('#myslider');
        var st = document.createElement('style');
        st.id = 's_myslider';
        document.head.appendChild(st);
        this.sliderStyle = document.getElementById('s_myslider');
        this.sliderPopup = document.querySelector('.custom-div-slider__popup');
        this.slider.value = 1000;
        this.handleSlider();
    };
    Object.defineProperty(MySliderComponent.prototype, "value", {
        // get accessor
        get: function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    // From ControlValueAccessor interface
    MySliderComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    // From ControlValueAccessor interface
    MySliderComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    MySliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MySliderComponent.prototype.handleSlider = function () {
        var gradValue = this.slider.value / this.slider.getAttribute('max') * this.slider.clientWidth;
        this.sliderStyle.textContent = '#myslider::-webkit-slider-runnable-track { background-size: ' +
            (gradValue + (this.slider.value < 2000 ? 1 : -1)) + 'px 100%, 100% }';
        var koeff = this.slider.value / this.slider.getAttribute('max') * 16;
        this.sliderPopup.style.left = gradValue - koeff - 28 + 'px';
    };
    MySliderComponent.prototype.formatCurrency = function (val) {
        return String(Math.round(val)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' $';
    };
    MySliderComponent = __decorate([
        core_1.Component({
            selector: 'my-slider',
            template: "\n    <div class=\"custom-div-slider\" (window:resize)=\"handleSlider()\">\n      <div class=\"custom-div-slider__popup\">{{formatCurrency(value)}}</div>\n      <input type=\"range\" (onload)=\"handleSlider()\" (change)=\"handleSlider()\" \n        (input)=\"handleSlider()\" [(ngModel)]=\"value\" class=\"custom-div-slider__input\" id=\"myslider\" max=\"4000\" />\n    </div>\n    ",
            styleUrls: ['./app/slider.component.css'],
            providers: [exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], MySliderComponent);
    return MySliderComponent;
}());
exports.MySliderComponent = MySliderComponent;

//# sourceMappingURL=slider.component.js.map
