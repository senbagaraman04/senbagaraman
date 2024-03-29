import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderprofileComponent } from './headerprofile/headerprofile.component';
import { ProjectsectionComponent } from './projectsection/projectsection.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { CertificationpartComponent } from './certificationpart/certificationpart.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderprofileComponent,
    ProjectsectionComponent,
    WorkExperienceComponent,
    CertificationpartComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
