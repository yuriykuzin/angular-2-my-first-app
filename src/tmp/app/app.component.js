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
var account_1 = require('./account');
var AppComponent = (function () {
    function AppComponent() {
        this.accounts = account_1.ACCOUNTS;
        this.selectedAcc = this.accounts[0];
        this.sliderValue = 1000;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.adjustArrow();
    };
    AppComponent.prototype.onAccChanged = function ($event) {
        this.selectedAcc = $event;
    };
    AppComponent.prototype.adjustArrow = function () {
        var mainbox = (document.querySelector('.b-mainbox'));
        mainbox.style.backgroundPosition = document.querySelector('.b-mainbox__first-column').clientWidth + 'px';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-main-app',
            templateUrl: './app/app.component.html',
            styleUrls: ['./app/app.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
