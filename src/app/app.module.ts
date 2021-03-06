import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import {RouterModule} from '@angular/router';
import { PreetiComponent } from './preeti/preeti.component';
import {SortPipe} from './app.sort';

@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    MyComponentComponent,
    ProductComponent,
    MembersComponent,
    PreetiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'products'
        ,component : ProductComponent
      },
      {
        path:'members'
        ,component : MembersComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
