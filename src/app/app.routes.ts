import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { OperacionesComponent } from './component/operaciones/operaciones.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:"operaciones", component:OperacionesComponent}
];