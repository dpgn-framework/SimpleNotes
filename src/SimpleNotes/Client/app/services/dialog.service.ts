import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DialogService } from "ng2-bootstrap-modal";
import { AlertDialog, ConfirmDialog, ConfirmDialogMode } from 'app/dialogs/dialog.module';
import { DemoCustomDialog } from 'app/demo/demo-custom.dialog';

@Injectable()
export class SnDialogService
{
    constructor(private dialogService: DialogService) { }

    showMessage(message: string): Observable<any>  {
        return this.dialogService.addDialog(AlertDialog, { title: 'Information', message: message });
    }

    showConfirmMessage(message: string): Observable<boolean> {
        return this.dialogService.addDialog(ConfirmDialog, { title: 'Confirmation', message: message, dialogMode: ConfirmDialogMode.okCancel });
    }

    showConfirmMessageYN(message: string): Observable<boolean> {
        return this.dialogService.addDialog(ConfirmDialog, { title: 'Confirmation', message: message, dialogMode: ConfirmDialogMode.yesNo });
    }

    showConfirmMessageYNC(message: string): Observable<boolean> {
        return this.dialogService.addDialog(ConfirmDialog, { title: 'Confirmation', message: message, dialogMode: ConfirmDialogMode.yesNoCancel });
    }

    showCustomDialog(title: string, name: string): Observable<any> {
        let params: { [id: string]: any } = {};
        params["name"] = name;
        
        return this.dialogService.addDialog(DemoCustomDialog, { title: title, params: params });
    }
}