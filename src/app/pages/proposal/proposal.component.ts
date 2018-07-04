/**
 * Created by aidan.haughey on 7/30/2017.
 */
import {OnInit, Component} from "@angular/core";
import * as jQuery from 'jquery';

declare var $: any;

@Component({
    selector: 'proposal',
    templateUrl: './proposal.component.html'
})
export class ProposalComponent implements OnInit {
    constructor() { }

    ngOnInit() {

        $(function() {

			$('.resumeSquareMargin').addClass("resumeMarginTop");

			$('.resumeMarginTop').removeClass("resumeSquareMargin");
			
        });

    }
}