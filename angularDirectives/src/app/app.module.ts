import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { PasswordValidatorComponent } from './password-validator/password-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    PasswordValidatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
