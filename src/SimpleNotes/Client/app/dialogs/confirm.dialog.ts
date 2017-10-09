import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export enum ConfirmDialogMode { okCancel, yesNo, yesNoCancel }

export interface ConfirmModel {
    title: string;
    message: string;
    dialogMode?: ConfirmDialogMode;
}

@Component({
    selector: 'sn-confirm-dialog',
    templateUrl: 'app/dialogs/confirm.dialog.html'
})
export class ConfirmDialog extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {
    title: string;
    message: string;
    dialogMode?: ConfirmDialogMode;

    textYesButton: string;
    textNoButton: string;
    textCancelButton: string;
    visibleCancelButton: boolean;

    constructor(dialogService: DialogService) {
        super(dialogService);
    }
    ngOnInit() {
        switch (this.dialogMode)
        {
            case ConfirmDialogMode.yesNo:
                this.textYesButton = 'Yes';
                this.textNoButton = 'No';
                break;
            case ConfirmDialogMode.yesNoCancel:
                this.textYesButton = 'Yes';
                this.textNoButton = 'No';
                this.textCancelButton = 'Cancel';
                this.visibleCancelButton = true;
                break;
            default:
                this.textYesButton = 'Ok';
                this.textNoButton = 'Cancel';
                break;
        }
    }
    yes() {
        // on click on confirm button we set dialog result as true,
        // ten we can get dialog result from caller code
        this.result = true;
        this.close();
    }
    no() {
        this.result = false;
        this.close(); 
    }
    cancel() {
        this.close();
    }
}
