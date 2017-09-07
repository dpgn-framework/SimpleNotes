import { Component } from '@angular/core';
//import { NgbModule } from 'ng2-bootstrap/ng2-bootstrap';
//import { AlertModule  } from 'ng2-bootstrap/ng2-bootstrap';

const now = new Date();

@Component({
    selector: 'ngbd-datepicker-basic',
    templateUrl: './datepicker-basic.html'
})
export class NgbdDatepickerBasic {

    //model: NgbDateStruct;
    date: { year: number, month: number };

    selectToday() {
        //this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    }
}