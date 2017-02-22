import {NgModule} from '@angular/core';
import {routing} from './app.routing';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {CarsComponent} from "./components/cars.component";
import {CarComponent} from "./components/car.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        routing,
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        CarsComponent,
        CarComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}