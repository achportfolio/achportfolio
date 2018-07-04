/**
 * Created by aidan.haughey on 5/18/2017.
 */
import {OnInit, Component} from "@angular/core";
import {Router} from "@angular/router";
import * as jQuery from 'jquery';

declare var $: any;

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor(private router: Router) { 
    }

    public navigateMenu(url) {

	    var myurl = `${url}`;
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

    	$(function() {

	        $('.homeCircleImg').delay(400).queue(function(){
				  $('.homeCircleImg').addClass("opacityFull");
			});

	        $('.mainText').delay(800).queue(function(){
				  $('.mainText').addClass("opacityFull");
			});

	        $('#mainSquareMargin').delay(1200).queue(function(){
				  $('#mainSquareMargin').css("height","335px");
			});
			
        });

        $(".desktop_bg" || ".resume_bg").click(function() {

			$('#mainSquareMargin').css("height","1335px");

			$('.mainText').css("opacity", "0");

			$('.homeCircleImg').css("opacity", "0");

        })        

     }


}