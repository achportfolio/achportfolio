
import {Component, OnInit, Input} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {Login} from "../../models/login";
import * as jQuery from 'jquery';

declare var $: any;

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html'
})
export class Navigation implements OnInit {
    @Input() loginInfo:Login;
    constructor( private router: Router) {}

    ngOnInit() {

    	this.router.events.subscribe((evt) => {
		    if (!(evt instanceof NavigationEnd)) {
		    return;
		      }
		  document.getElementById("page-wrapper").scrollIntoView();
		});

	    $(function() {
	        
			$('.shadowGrow').css("box-shadow","3px 3px 3px #e6e6e6");

		    $('.x-delete').click(function() {
		        
		        $('.mainNavSwitch').css({'margin-top': '0', 'height': '100%'});

		        $('.x-close').click(function(){
		  		    $('.mainNavSwitch').css({'margin-top': '-190%', 'height': 'auto'});
		        });

		        $('.navButtons').click(function(){
		  		    $('.mainNavSwitch').css({'margin-top': '-190%', 'height': 'auto'});
		        });
	  	    });
				
	    });

    }

    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }
}