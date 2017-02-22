import 'rxjs/add/operator/toPromise';
import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {Car} from "../objects/car";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: "app/components/car.component.html"
})

export class CarComponent {

    constructor(private http: Http, private route: ActivatedRoute) {}

    carID: number = this.route.snapshot.params["id"];

    car: Car = new CarObj();

    edit: boolean = false;

	ngOnInit() {
		this.getCar(this.carID).then(data => this.car = data);
	}

	getCar(id: number) {
		return this.http.get("app/resources/data/cars.json").toPromise().then(res => <Car[]> res.json()).then(data => data.filter((car, index) => index == id)[0]);
	}

}

class CarObj implements Car {
	constructor(vin?: string, brand?: string, year?: number, color?: string) {}
}