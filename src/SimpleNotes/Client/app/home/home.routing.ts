import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { NoteComponent } from "app/note/note.component";

const appRoutes: Routes = [
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
            }
        ]
    }
];
export const homeRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
//http://www.gistia.com/angular-router-part-2/