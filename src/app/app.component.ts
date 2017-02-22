import {Component} from '@angular/core';
import {Router} from "@angular/router";
declare let Notification: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {

    constructor(private router: Router) {}

    ngOnInit() {
        this.showTaskNotification();
    }

    showTaskNotification() {

        if (Notification.permission === "granted") {
            this.createTaskNotification();
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission(permission => {
                if (permission === "granted") {
                    this.createTaskNotification();
                }
            });
        }

    }

    createTaskNotification() {

        let options = {
            body: "Check out this car (click me)",
            renotify: true,
            tag: "renotify",
            requireInteraction: true
        };
        let notification = new Notification("Alert", options);
        notification.onclick = () => {
            window.focus();
            this.router.navigateByUrl("/car/1", true).then();
            notification.close();
        };

    }

}