import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutVolunteersComponent } from './about-volunteers/about-volunteers.component';
import { CordonsComponent } from './cordons/cordons.component';
import { InfoComponent } from './info/info.component';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';

const routes: Routes = [
  {
    path: '',
    component: CordonsComponent
  },
  {
    path: 'about-volunteers',
    component: AboutVolunteersComponent
  },
  {
    path: 'cordons',
    component: CordonsComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'volunteer-form',
    component: VolunteerFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
