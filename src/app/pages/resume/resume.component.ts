/**
 * Created by aidan.haughey on 7/30/2017.
 */
import {OnInit, Component} from "@angular/core";
import * as jQuery from 'jquery';

declare var $: any;

@Component({
    selector: 'resume',
    templateUrl: './resume.component.html'
})
export class ResumeComponent implements OnInit {
    constructor() { }

    ngOnInit() {

        $(function() {

			$('.resumeSquareMargin').addClass("resumeMarginTop");

			$('.resumeMarginTop').removeClass("resumeSquareMargin");
			
        });

    }
}