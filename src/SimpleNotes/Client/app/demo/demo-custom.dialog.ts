import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { ServiceLocator } from 'app/home/home.declare';

export interface CustomDialogModel {
    title: string;
    params?: { [id: string]: any };
}

@Component({
    selector: 'sn-demo-custom-dialog',
    templateUrl: 'app/demo/demo-custom.dialog.html'
})
export class DemoCustomDialog extends DialogComponent<CustomDialogModel, any>
implements CustomDialogModel, OnInit {
    title: string;
    params?: { [id: string]: string };

    //binding data
    paramName: string;

    constructor(dialogService: DialogService) {
        super(dialogService);
    }

    ngOnInit() {
        if (this.params) {
            this.paramName = this.params["name"];
        }
    }
    
    showMessage() {
        ServiceLocator.SnDialogService.showMessage('Hello new message');
    }

    showOtherPopup() {
        ServiceLocator.SnDialogService.showCustomDialog("Other popup" , "This is other popup");
    }

    save() {
        this.result = this.paramName;
        this.close();
    }
}
