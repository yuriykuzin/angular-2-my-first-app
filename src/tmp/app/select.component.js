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
var MySelectComponent = (function () {
    function MySelectComponent() {
        // The internal data model
        this.accounts = [];
        this.valueChanged = new core_1.EventEmitter();
    }
    MySelectComponent.prototype.onSelect = function (acc) {
        this.innerSelectedAcc = acc;
        this.valueChanged.emit(this.innerSelectedAcc);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MySelectComponent.prototype, "accounts", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', account_1.Account)
    ], MySelectComponent.prototype, "innerSelectedAcc", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MySelectComponent.prototype, "valueChanged", void 0);
    MySelectComponent = __decorate([
        core_1.Component({
            selector: 'my-select',
            template: "\n      <div class=\"b-mainbox__first-column\">\n        <div class=\"b-menu__header\">\n          <span class=\"b-menu__header__number\">\u2116 \u0441\u0447\u0435\u0442\u0430</span>\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439</div>\n        <ul class=\"b-menu\">\n          <div *ngFor=\"let acc of accounts\"> \n            <li [class.b-item_selected]=\"acc === innerSelectedAcc\" (click)=\"onSelect(acc)\" class=\"b-item\">\n              <span class=\"b-item__account\">\n                <span class=\"b-item__account__number\" [class.b-item_selected__account__no-dashed]=\"acc === innerSelectedAcc\">\n                  {{acc.id}}\n                </span>\n              </span>\n              <span class=\"b-item__account__name\">{{acc.name}}</span></li><br>\n          </div>    \n        </ul>\n      </div> \n    ",
            styleUrls: ['./app/select.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MySelectComponent);
    return MySelectComponent;
}());
exports.MySelectComponent = MySelectComponent;

//# sourceMappingURL=select.component.js.map
