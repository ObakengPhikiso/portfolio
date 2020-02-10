import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { AwardsComponent } from './awards/awards.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './guards/auth.guard';
import { ModalComponent } from './education/modal/modal.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent, pathMatch: 'full'},
  {path: 'experience', component: ExperienceComponent, pathMatch: 'full'},
  {path: 'education', component: EducationComponent, pathMatch: 'full',
   children: [{path: 'modal', component: ModalComponent}]},
  {path: 'skills', component: SkillsComponent, pathMatch: 'full'},
  {path: 'certifications', component: InterestsComponent, pathMatch: 'full'},
  {path: 'Mighty.1872Admin', component: AwardsComponent, pathMatch: 'full'},
  {path: 'ythgim-Dashboard', component: MessagesComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: '**', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
