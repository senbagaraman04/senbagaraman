import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderprofileComponent } from './headerprofile/headerprofile.component';
import { ProjectsectionComponent } from './projectsection/projectsection.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderprofileComponent,
    ProjectsectionComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
