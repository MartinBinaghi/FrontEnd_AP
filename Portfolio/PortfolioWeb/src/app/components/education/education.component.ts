import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  education1:boolean = true;
  education2:boolean = false;
  education3:boolean = false;
  education4:boolean = false;

  ngOnInit(): void {
  }

}
