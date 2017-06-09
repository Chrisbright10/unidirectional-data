import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PrimaryComponent } from './primary/primary.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { DatastoreService } from './datastore/datastore.service';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryComponent,
    SecondaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DatastoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
