import 'rxjs/add/operator/toPromise';
import {Component, OnInit} from '@angular/core';
import {Car} from "../objects/car";
import {Http} from "@angular/http";

@Component({
    templateUrl: 'app/components/cars.component.html'
})

export class CarsComponent implements OnInit {

    constructor(private http: Http) {}

    cars: Car[];

    ngOnInit() {
        this.getCars().then(data => this.cars = data);
    }

    getCars() {
        return this.http.get("app/resources/data/cars.json").toPromise().then(res => <Car[]> res.json()).then(data => data);
    }

}
