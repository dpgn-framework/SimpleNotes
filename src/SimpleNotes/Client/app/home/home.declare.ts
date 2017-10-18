import { Injector } from '@angular/core';

export class ServiceLocator {
    static injector: Injector;

    static get SnDialogService(): SnDialogService {
        return ServiceLocator.injector.get(SnDialogService);
    }
}

//----------------------------------------------------------------------------

//Services
import { SnDialogService } from 'app/services/dialog.service';
export { SnDialogService } from 'app/services/dialog.service';

//Components
import { HomeComponent } from 'app/home/home.component';
export { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/about/about.component';
export { AboutComponent } from 'app/about/about.component';
import { NoteComponent } from 'app/note/note.component';
export { NoteComponent } from 'app/note/note.component';
import { DemoComponent } from 'app/demo/demo.component';
export { DemoComponent } from 'app/demo/demo.component';

//Control Components
import { SnDatepickerComponent } from 'app/components/date.picker.component';
export { SnDatepickerComponent } from 'app/components/date.picker.component';

//Entry Components
import { DemoCustomDialog } from 'app/demo/demo-custom.dialog';
export { DemoCustomDialog } from 'app/demo/demo-custom.dialog';

//Directives
import { ClickOutsideDirective } from 'app/components/ng2-click-outside.directive';
export { ClickOutsideDirective } from 'app/components/ng2-click-outside.directive';

//Dialogs

//-----------------------------------------------------------------------------------

//Services

export const sn_services = [SnDialogService];
//Components
export const sn_components = [HomeComponent, AboutComponent, NoteComponent, DemoComponent];

//Controls Components
export const sn_control_components = [SnDatepickerComponent];

//Entry Components
export const sn_entry_components = [DemoCustomDialog];

//Directives
export const sn_directives = [ClickOutsideDirective];

// Dialogs
