import { Component, Input } from '@angular/core'

@Component({
 selector: 'accordion-box',
  templateUrl: 'accordion-box.html'
})

export class AccordionBox {
	@Input() accordionTitle;
	@Input() accordionExpand: boolean;
	@Input() scrollToTop: string;
	
	private title;
	private expanded:boolean = false;

	constructor() { }
	
	ngOnInit(){
		this.title = this.accordionTitle;
		//We want expanded == true if accordionExpand isn't undefined, and if it is true.
		if (typeof this.accordionExpand === 'undefined') {
			this.expanded = false;
		} else {
			this.expanded = this.accordionExpand;
		}
	}
	
	onClick(event){
	this.expanded = !this.expanded;
	if(this.scrollToTop !== "false" && this.expanded === true){
  		var target = event.target.parentElement; 
  		setTimeout(function(){
  			target.scrollIntoView(true);
  		} , 100);
  	}
  	
  }

}