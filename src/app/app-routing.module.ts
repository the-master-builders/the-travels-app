import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './core/welcome/welcome.component';
const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
    {path: 'trips', loadChildren: './trips/trips.module#TripsModule' },
    {path: 'destinations', loadChildren: './destinations/destinations.module#DestinationsModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
