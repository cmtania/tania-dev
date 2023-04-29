import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from '../shared/css-loader/loader.component';
import { HeaderComponent } from '../features/header/header.component';
import { HomeComponent } from '../features/home/home.component';
import { MainComponent } from '../features/main/main.component';
import { ExperienceComponent } from '../features/experience/experience.component';
import { CertificationComponent } from '../features/certification/certification.component';
import { ProjectComponent } from '../features/project/project.component';
import { AboutComponent } from '../features/about/about.component';
import { SkillsComponent } from '../features/skills/skills.component';
import { FreelanceComponent } from '../features/freelance/freelance.component';
import { FooterComponent } from '../features/footer/footer.component';
import { ContactComponent } from '../features/contact/contact.component';
import { ToDoComponent } from '../features/todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    MainComponent,
    HeaderComponent,
    HomeComponent,
    ExperienceComponent,
    CertificationComponent,
    ProjectComponent,
    AboutComponent,
    SkillsComponent,
    FreelanceComponent,
    ContactComponent,
    ToDoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
