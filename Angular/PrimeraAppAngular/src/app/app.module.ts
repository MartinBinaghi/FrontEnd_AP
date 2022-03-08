import {AppRoutingModule} from './app-routing.module.ts.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentepruebaComponent } from './componenteprueba/componenteprueba.component';
import {RouterModule, Routes} from '@angular/router';
import { loginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [
  {path: 'prueba', component: ComponentepruebaComponent},
  {path: 'login', component: loginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ComponentepruebaComponent,
    loginComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    loginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
