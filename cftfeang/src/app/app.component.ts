import { Component, OnInit } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes Tutorial';
  isVisible = false;

  ngOnInit() {

  }

  showModal() {
    this.isVisible = true;
  }


}
