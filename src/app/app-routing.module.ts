import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { EducationComponent } from './education/education.component';
import { SkillSummaryComponent } from './skill-summary/skill-summary.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path: '', redirectTo: 'info', pathMatch: 'full'},
  {path: 'info', component: HeaderComponent},
  {path: 'info/about-me', component: AboutMeComponent},
  {path: 'info/education', component: EducationComponent},
  {path: 'info/skills', component: SkillSummaryComponent},
  {path: 'info/experience', component: ExperienceComponent},
  {path: 'info/projects', component: ProjectsComponent},
  {path: '**', redirectTo: 'info', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
