import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarComponent} from "./components/car.component";
import {CarsComponent} from "./components/cars.component";

const appRoutes: Routes = [
    {
        path: 'cars',
        component: CarsComponent
    },
    {
        path: 'car/:id',
        component: CarComponent
    },
    {
        path: '**',
        redirectTo: 'cars',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);