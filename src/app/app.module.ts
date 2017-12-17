import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserComponent } from './browser/browser.component';
import { FormsModule } from '@angular/forms';
import {DirectoryService} from './directory.service';
import {MessageService} from 'primeng/components/common/messageservice';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContextMenuModule} from 'ngx-contextmenu';

@NgModule({
  declarations: [
    AppComponent,
    BrowserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule,  MDBBootstrapModule.forRoot(), ContextMenuModule
  ],
  providers: [DirectoryService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
