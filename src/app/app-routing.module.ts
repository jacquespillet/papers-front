import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserComponent} from './browser/browser.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
    { path: 'browse/:id', component: BrowserComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}