import { Component, OnInit } from '@angular/core';

/*import { AddEducationService } from 'src/app/services/add-education.service';
import {Education} from "../../Education";*/

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  /*educations: Education[] = [];*/

  constructor(
    /*private AddEducationService: AddEducationService,*/
  ) {}

  ngOnInit(): void {
    /*this.AddEducationService.getEducations().subscribe((educations)=>(
      this.educations = educations
    ));*/
  }

  /*deleteEducation(education: Education){
    this.AddEducationService.deleteEducation(education)
      .subscribe(()=>(
        this.educations = this.educations.filter((t) => t.id !== education.id)
    ));
  }
  */
}
