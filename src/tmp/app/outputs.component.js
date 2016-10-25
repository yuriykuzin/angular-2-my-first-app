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
var MyOutputsComponent = (function () {
    function MyOutputsComponent() {
    }
    MyOutputsComponent.prototype.formatCurrency = function (value) {
        return String(Math.round(value)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' $';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', account_1.Account)
    ], MyOutputsComponent.prototype, "account", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MyOutputsComponent.prototype, "sliderValue", void 0);
    MyOutputsComponent = __decorate([
        core_1.Component({
            selector: 'my-outputs',
            template: "\n    <div *ngIf=\"account\" class=\"b-outputs\">\n      <div class=\"b-outputs__outputs-name\">\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432\u0430\u0448 \u0434\u0435\u043F\u043E\u0437\u0438\u0442 \u0431\u044B \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u043B</div>        \n      <div class=\"b-outputs__outputs-text\" id=\"output2\">{{formatCurrency(sliderValue * account.mult1)}}</div>              \n      <div class=\"b-outputs__clearfloat\"></div>\n      <div class=\"b-outputs__outputs-name\">\u0417\u0430 \u0433\u043E\u0434 \u043F\u0440\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0438 \u0432\u043A\u043B\u0430\u0434\u0430, \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0431\u044B</div>        \n      <div class=\"b-outputs__outputs-text\" id=\"output3\">{{formatCurrency(sliderValue * account.mult2)}}</div>\n    </div>\n  ",
            styleUrls: ['./app/outputs.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MyOutputsComponent);
    return MyOutputsComponent;
}());
exports.MyOutputsComponent = MyOutputsComponent;

//# sourceMappingURL=outputs.component.js.map
