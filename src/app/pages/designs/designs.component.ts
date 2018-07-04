/**
 * Created by aidan.haughey on 7/30/2017.
 */
import {OnInit, Component} from "@angular/core";
import * as jQuery from 'jquery';

declare var $: any;

@Component({
    selector: 'designs',
    templateUrl:'./designs.component.html'
})
export class DesignsComponent implements OnInit {
    constructor() { }

    ngOnInit() {

        $(function() {
        
	        // DESIGN PAGE LIGHTBOX

	        $('.imgDesigns').click(function() {
	          var imgSrc = $(this).attr("alt");

	          $('<div class="lightbox"><h1 class="designClose">X</h1></div>').appendTo('#mainWrapper');
	          $('<div class="col-lg-12" ><img class="imgFull imgDesigns lightboxImg" src=""></div>').appendTo('.lightbox');
	          $('.lightboxImg').attr("src", imgSrc );
	        });
	        $('.designClose').click(function() {
	          $(".lightbox").remove();
	        });
	      
	    });

    }
}