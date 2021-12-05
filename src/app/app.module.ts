import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { AboutVolunteersComponent } from './about-volunteers/about-volunteers.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CordonsComponent } from './cordons/cordons.component';
import { InfoComponent } from './info/info.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    AboutVolunteersComponent,
    CordonsComponent,
    VolunteerFormComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    CommonModule,
    NgbPaginationModule, 
    NgbAlertModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
