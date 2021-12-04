import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutVolunteersComponent } from './about-volunteers/about-volunteers.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CordonsComponent } from './cordons/cordons.component';
import { InfoComponent } from './info/info.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
