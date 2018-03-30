import { Component, Input } from "@angular/core";

@Component({
    selector:'loading-overlay',
    templateUrl:'./loading-overlay.html',
    styleUrls:['./loading-overlay.css']
})
export class LoadingOverlay {
    @Input() isVisible:boolean = false;
}