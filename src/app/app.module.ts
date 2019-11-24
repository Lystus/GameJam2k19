import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertComponent} from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AlertModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { CardSelectComponent } from './card-select/card-select.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path : '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'cardselect/:id' , component: CardSelectComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardSelectComponent
  ],
  imports: [
    BrowserModule,
    AlertModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
