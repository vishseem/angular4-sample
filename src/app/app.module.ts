import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { RatingComponent } from './rating/rating.component';

import { ProductService } from './product.service';
import { PowerPipe } from './power.pipe';

@NgModule({
  declarations: [
    // Components, Directives, Pipes
    AppComponent,
    ProductComponent,
    RatingComponent,
    PowerPipe,   
  ],
  imports: [
    // Modules (Inbuild, Custom)
    BrowserModule,
    FormsModule
  ],
  // Services
  providers: [ProductService],
  // Root Component
  bootstrap: [ProductComponent]
})
export class AppModule { }
