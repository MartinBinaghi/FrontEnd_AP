import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HsSkillsComponent } from './components/hs-skills/hs-skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationModule } from './components/education/education.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienceComponent,
    ContactMeComponent,
    FooterComponent,
    NavMenuComponent,
    AboutMeComponent,
    HsSkillsComponent,
    ProjectsComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    EducationModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
