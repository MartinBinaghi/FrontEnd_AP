import { Component, OnInit } from '@angular/core';

import { AddEducationService } from 'src/app/services/add-education.service';
import {Education} from "../../Education";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Education[] = [];

  constructor(
    private AddEducationService: AddEducationService,
  ) {}

  /*
  education1:boolean = true;
  education2:boolean = false;
  education3:boolean = false;
  education4:boolean = false;
  */

  ngOnInit(): void {
    this.educations = this.AddEducationService.getEducations();
  }

}

