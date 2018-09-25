import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import GroupService from '../Service/group.service'
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
