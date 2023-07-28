import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillSummaryComponent } from './skill-summary/skill-summary.component';
import { LeadershipComponent } from './leadership/leadership.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutMeComponent,
    ProjectsComponent,
    ResumeComponent,
    MainPageComponent,
    EducationComponent,
    ExperienceComponent,
    SkillSummaryComponent,
    LeadershipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
