import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ShortenPipe } from './shorten.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    AddEmpComponent,
    NavBarComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
