import { Component } from "@angular/core";
//import { DialogService } from "ng2-bootstrap-modal";
//import { AlertDialog, ConfirmDialog, ConfirmDialogMode } from 'app/dialogs/dialog.module';
import { SnDialogService } from 'app/home/home.declare';

@Component({
    selector: "sn-demo",
    templateUrl: 'app/demo/demo.component.html'
})
export class DemoComponent {
    constructor(/*private dialogService: DialogService, */private snDialogService: SnDialogService) { }

    // Demo DatePicker
    dateValue: string = "2016/10/25";

    showAlertDialog() {
        /*this.dialogService.addDialog(AlertDialog, { title: 'Alert title!', message: 'Alert message!!!' }).subscribe(() => {
            console.log('message is closed');
        });*/

        this.snDialogService.showMessage('Hello').subscribe(() => console.log('Message is closed'));
    }

    showConfirmDialogOC() {
        /*this.dialogService.addDialog(ConfirmDialog, { title: 'Confirmation', message: 'Bla bla confirm some action?', dialogMode: ConfirmDialogMode.okCancel }).subscribe(isConfirm => {
            console.log(isConfirm);
        });*/

        this.snDialogService.showConfirmMessage('Confirm message Ok Cancel').subscribe((result) => console.log('Message is closed: ' + result));
    }

    showConfirmDialogYN() {
        /*this.dialogService.addDialog(ConfirmDialog, { title: 'Confirmation', message: 'Bla bla confirm some action?', dialogMode: ConfirmDialogMode.yesNo }).subscribe(isConfirm => {
            console.log(isConfirm);
        });*/

        this.snDialogService.showConfirmMessageYN('Confirm message Yes No').subscribe((result) => console.log('Message is closed: ' + result));
    }

    showConfirmDialogYNC() {
        /*this.dialogService.addDialog(ConfirmDialog, { title: 'Confirmation', message: 'Bla bla confirm some action?', dialogMode: ConfirmDialogMode.yesNoCancel }).subscribe(isConfirm => {
            console.log(isConfirm);
        });*/

        this.snDialogService.showConfirmMessageYNC('Confirm message Yes No Cancel').subscribe((result) => console.log('Message is closed: ' + result));
    }

    showCustomDialog() {
        this.snDialogService.showCustomDialog('This is custom dialog', 'SOuth River').subscribe((result) => console.log('Message is closed: ' + result));
    }
}