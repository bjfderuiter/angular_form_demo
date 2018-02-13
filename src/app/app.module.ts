import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestformComponent } from './testform/testform.component';
import { ReactiveFormsModule} from '@angular/forms';
import { SubformComponent } from './testform/subform/subform.component';


@NgModule({
  declarations: [
    AppComponent,
    TestformComponent,
    SubformComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
