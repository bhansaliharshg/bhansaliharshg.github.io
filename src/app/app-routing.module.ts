import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: '', redirectTo: 'about-me', pathMatch: 'full'},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '**', redirectTo: 'about-me', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
