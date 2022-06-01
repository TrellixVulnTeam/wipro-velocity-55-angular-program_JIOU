import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { IndustriesComponent } from './industries/industries.component';
import { CloudComponent } from './cloud/cloud.component';
import { AdminModule } from './admin/admin.module';

//Decorator that marks a class as an NgModule and supplies configuration metadata.
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    IndustriesComponent,
    CloudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
