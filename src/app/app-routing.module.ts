import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../features/main/main.component';
import { ResumeComponent } from '../features/resume/resume.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'tania-dev/resume', component: ResumeComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main/main', redirectTo: '/main', pathMatch: 'full'},
  { path: '**', redirectTo: '/main', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
