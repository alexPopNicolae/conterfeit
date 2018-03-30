import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating:number = 4;
    @Output() ratingClicked:EventEmitter<string>  = new EventEmitter<string>();

    starWidth:number;

    ngOnChanges():void {
        this.starWidth = this.rating * 86/5;
    }
    onClick():void {
      this.ratingClicked.emit(`Ai dat click pe o ${this.rating} de rating!!`);
    }
}