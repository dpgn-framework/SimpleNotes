import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { NoteComponent } from "app/note/note.component";

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
            }
        ]
    }
];
export const homeRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
//http://www.gistia.com/angular-router-part-2/