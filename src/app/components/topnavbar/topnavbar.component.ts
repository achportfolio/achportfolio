import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.component.html'
})
export class Topnavbar {
    constructor(private router: Router) {
        this.router = router
    }

    public navigateMenu(url) {

        var myurl = `${url}`;

        var homeUrl = this.router.url;

        console.log(url);

        if ((myurl == '/home') && (homeUrl == '\home')) {
            return;
        }

        setTimeout( () => {
        this.router.navigateByUrl(myurl).then(e => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
        }, 1000);
    }

    ngOnInit() {
    }

    logout() {
        localStorage.clear();
        // location.href='http://to_login_page';
    }
}