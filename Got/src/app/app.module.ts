import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { RouterModule ,Routes }  from '@angular/router';
import { SinglebookViewComponent } from './singlebook-view/singlebook-view.component';
import { SinglehouseViewComponent } from './singlehouse-view/singlehouse-view.component';
import { SinglecharacterViewComponent } from './singlecharacter-view/singlecharacter-view.component';

import { HttpClientModule }  from '@angular/common/http';
import {GameofthronesService}  from './gameofthrones.service';

import { OrderModule } from 'ngx-order-pipe';





@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    SinglebookViewComponent,
    SinglehouseViewComponent,
    SinglecharacterViewComponent 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OrderModule,
    RouterModule.forRoot([
      {path:'home', component:HomeViewComponent},
       {path:'' , redirectTo:'home', pathMatch:'full'},
      {path:'book/:bookId', component:SinglebookViewComponent},
      {path:'house/:houseId' , component:SinglehouseViewComponent},
      {path:'character/:characterId', component:SinglecharacterViewComponent}
      
    
    ])
  ],
  providers: [GameofthronesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
