import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DialogComponent, DialogService, BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AlertDialog } from 'app/dialogs/alert.dialog';
import { ConfirmDialog } from 'app/dialogs/confirm.dialog';

export { AlertDialog } from 'app/dialogs/alert.dialog';
export { ConfirmDialog, ConfirmModel, ConfirmDialogMode } from 'app/dialogs/confirm.dialog';

@NgModule({
    imports: [
        BootstrapModalModule, CommonModule
    ],
    declarations: [
        AlertDialog, ConfirmDialog
    ],
    entryComponents: [
        AlertDialog, ConfirmDialog
    ]
})
export class DialogModule {
}