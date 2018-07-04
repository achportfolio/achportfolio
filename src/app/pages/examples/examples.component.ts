/**
 * Created by aidan.haughey on 7/30/2017.
 */
import {OnInit, Component} from "@angular/core";
import * as jQuery from 'jquery';

declare var $: any;

@Component({
    selector: 'examples',
    templateUrl:'./examples.component.html'
})
export class ExamplesComponent implements OnInit {
    constructor() { }

    ngOnInit() {

    $(function() {

			$('.exampleSquareMargin').addClass("exampleMarginTop");

			$('.exampleMarginTop').removeClass("exampleSquareMargin");
			
        });

    }
}