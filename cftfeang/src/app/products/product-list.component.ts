import { Component, OnInit } from "@angular/core";
import { IProduct } from './product';
import { ProductService } from "./product.service";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor(private _productService:ProductService) {
        
    }    

    title = 'Product List From the class of the component';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage:boolean = false;
    products:IProduct[];
    _listFilter:string;
    errorMessage;

    get listFilter():string {
        return this._listFilter;
    }

    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts:IProduct[];

  

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit():void {
        console.log("Incepe sa afisezi cerculetul de incarcare");
        this._productService.getProducts()
                            .subscribe(products => { 
                                       this.products = products;
                                       this.filteredProducts = this.products;
                                       },
                                       error => { 
                                           this.errorMessage = <any>error;
                                        },
                                        ()=> {
                                            console.log("Acum ar trebui sa ascunzi cerculetul!");
                                        })
        this.listFilter = '';
    }

    onRatingClicked(message:string):void {
        this.title = 'Product List ' + message;
    }

    performFilter(filterBy:string):IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct)=>{
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1;
        })
    }

}