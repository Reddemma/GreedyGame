import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TracksComponent } from './tracks';
import { GenresComponent } from './genres';
import {RatingModule} from "ng2-rating";
import { Service }         from './service';
@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RatingModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
