import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: '', redirectTo: 'info/about-me', pathMatch: 'full'},
  {path: 'info/about-me', component: AboutMeComponent},
  {path: 'info/resume', component: ResumeComponent},
  {path: 'info/projects', component: ProjectsComponent},
  {path: '**', redirectTo: 'info/about-me', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
