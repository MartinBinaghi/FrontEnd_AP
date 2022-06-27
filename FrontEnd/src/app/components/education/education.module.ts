import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEducationComponent } from './add-education/add-education.component';
import { EducationComponent } from './education.component';



@NgModule({
  declarations: [
    EducationComponent,
    AddEducationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [EducationComponent, AddEducationComponent]
})
export class EducationModule { }
