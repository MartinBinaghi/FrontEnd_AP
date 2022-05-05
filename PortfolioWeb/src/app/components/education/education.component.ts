import { Component, OnInit } from '@angular/core';

import {Education} from "../../Education";
import { EDUCATIONS } from 'src/app/mock-educations';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Education[] = EDUCATIONS;

  constructor() { }

  /*
  education1:boolean = true;
  education2:boolean = false;
  education3:boolean = false;
  education4:boolean = false;
  */

  ngOnInit(): void {
  }

}

