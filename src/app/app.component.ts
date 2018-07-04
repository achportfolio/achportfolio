import { Component } from '@angular/core';
import {Login} from "./models/login";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginInfo:Login = {
      first_name:'Aidan',
      last_name:'Haughey',
      avatar:'ach-logo-1.png',
      title:'Front End Developer',
      email:'aidan@achportfolio.com'
  };

  constructor( private router: Router) { }

    ngOnInit() { }

    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }

}
