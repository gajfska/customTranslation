import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {CustomTranslatePipe} from "./pipe/customTranslate.pipe";
import {LanguageService} from "./services/language.service";
import {HomeComponent} from "./home/home.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomTranslatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent],
  exports: [CustomTranslatePipe]
})
export class AppModule { }
