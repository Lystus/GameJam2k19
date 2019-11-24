import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertComponent} from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AlertModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { CardSelectComponent } from './card-select/card-select.component';
import {DataService} from './DataService';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path : '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'cardselect' , component: CardSelectComponent},
  {path: 'game' , component: GameComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardSelectComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AlertModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
