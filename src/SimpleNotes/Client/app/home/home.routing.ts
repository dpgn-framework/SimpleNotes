import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent, AboutComponent, NoteComponent, DemoComponent } from "app/home/home.declare";

const appRoutes: Routes = [
    /*{
        path: "home",
        component: HomeComponent
    },*/
    {
        path: "home",
        component: HomeComponent,
        children: [
            {
                path: 'about',
                component: AboutComponent,
                outlet: 'app-content'
            },
            {
                path: 'note',
                component: NoteComponent,
                outlet: 'app-content'
            },
            {
                path: 'demo',
                component: DemoComponent,
                outlet: 'app-content'
            }
        ]
    }
];
export const homeRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
//http://www.gistia.com/angular-router-part-2/