import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [//aici vin componentele
    AppComponent,
    ProductListComponent,
    ConvertToSpaces
  ],
  imports: [//aici vin importurile de librarii
    BrowserModule,
    FormsModule
  ],
  providers: [],//aici vin serviciile
  bootstrap: [AppComponent]
})
export class AppModule { }
