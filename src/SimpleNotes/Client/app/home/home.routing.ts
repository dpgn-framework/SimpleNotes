import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent, AboutComponent, NoteComponent, DemoComponent } from "app/home/home.declare";

const appRoutes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: 'about',
                component: AboutComponent,
            },
            {
                path: 'note',
                component: NoteComponent,
            },
            {
                path: 'demo',
                component: DemoComponent,
            }
        ]
    }
];
export const homeRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
//http://www.gistia.com/angular-router-part-2/