import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { LoadingOverlay } from './shared/loading-overlay.component';
import { HttpClient } from 'selenium-webdriver/http';
import { UsersList } from './users/users-list.component';
import { ProductDetail } from './productdetail/product-detail.component';

@NgModule({
  declarations: [//aici vin componentele
    AppComponent,
    ProductListComponent,
    ConvertToSpaces, 
    StarComponent,
    LoadingOverlay,
    UsersList,
    ProductDetail
  ],
  imports: [//aici vin importurile de librarii
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],//aici vin serviciile
  bootstrap: [AppComponent]
})
export class AppModule { }
