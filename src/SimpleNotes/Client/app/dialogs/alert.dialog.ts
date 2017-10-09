import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface AlertModel {
    title: string;
    message: string;
}

@Component({
    selector: 'sn-alert-dialog',
    templateUrl:'app/dialogs/alert.dialog.html'
})
export class AlertDialog extends DialogComponent<AlertModel, null> implements AlertModel {
    title: string;
    message: string;
    constructor(dialogService: DialogService) {
        super(dialogService);
    }
}
