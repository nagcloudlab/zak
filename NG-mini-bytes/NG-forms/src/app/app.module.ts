import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateCustomerFormComponent } from './template-customer-form/template-customer-form.component';
import { ZipValidatorDirective } from './zip-validator.directive';
import { ReactiveCustomerFormComponent } from './reactive-customer-form/reactive-customer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateCustomerFormComponent,
    ZipValidatorDirective,
    ReactiveCustomerFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
