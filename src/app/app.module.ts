import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SubmitComponent } from './submit/submit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [FormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
