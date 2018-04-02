import { Component, OnInit } from "@angular/core";

@Component({
    selector:'pm-product-details',
    templateUrl:'./product-detail.component.html',
    styleUrls:['./product-detail.component.html']
})
export class ProductDetail implements OnInit {

    title = "Asta e componenta mea de product details component";

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}