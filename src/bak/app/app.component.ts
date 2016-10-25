import { Component } from '@angular/core';

import { CONSTANTS } from './shared';

@Component({
    selector: 'my-main-app',
    templateUrl: 'app/app.html'
})
export class AppComponent {
    public appBrand: string;

    constructor() {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
    }
}
