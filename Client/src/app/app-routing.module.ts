import { NgModule } from '@angular/core'

import { RouterModule, Routes } from '@angular/router'

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const approutes: Routes = [
    {
        path: 'main',
        loadChildren: () => import('./main/main.module').then(mod => mod.MainModule)
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PagenotfoundComponent
    }
];

@NgModule({

    imports: [RouterModule.forRoot(approutes, { enableTracing: true })],
    exports: [RouterModule]

})
export class AppRoutingModule {

}
