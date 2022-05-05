import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeButtonComponent } from './components/theme-button/theme-button.component';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddEducationComponent } from './components/add-education/add-education.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeButtonComponent,
    HomeComponent,
    EducationComponent,
    ExperienceComponent,
    ContactMeComponent,
    FooterComponent,
    AddEducationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
