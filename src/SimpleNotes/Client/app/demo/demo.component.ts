import { Component } from "@angular/core";
import { DialogService } from "ng2-bootstrap-modal";
import { AlertDialog, ConfirmDialog, ConfirmDialogMode } from 'app/dialogs/dialog.module';

//import { DatePickerComponent } from "ng2-bootstrap";

@Component({
    selector: "sn-demo",
    templateUrl: 'app/demo/demo.component.html'
})
export class DemoComponent {
    constructor(private dialogService: DialogService) { }

    showAlertDialog() {
        this.dialogService.addDialog(AlertDialog, { title: 'Alert title!', message: 'Alert message!!!' });
    }

    showConfirmDialogOC() {
        this.dialogService.addDialog(ConfirmDialog, { title: 'Confirmation', message: 'Bla bla confirm some action?', dialogMode: ConfirmDialogMode.okCancel }).subscribe(isConfirm => {
            console.log(isConfirm);
        });
    }

    showConfirmDialogYN() {
        this.dialogService.addDialog(ConfirmDialog, { title: 'Confirmation', message: 'Bla bla confirm some action?', dialogMode: ConfirmDialogMode.yesNo }).subscribe(isConfirm => {
            console.log(isConfirm);
        });
    }

    showConfirmDialogYNC() {
        this.dialogService.addDialog(ConfirmDialog, { title: 'Confirmation', message: 'Bla bla confirm some action?', dialogMode: ConfirmDialogMode.yesNoCancel }).subscribe(isConfirm => {
            console.log(isConfirm);
        });
    }
}