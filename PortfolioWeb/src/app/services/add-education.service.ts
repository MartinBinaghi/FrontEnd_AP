import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';

import {Education} from "../Education";
import { EDUCATIONS } from 'src/app/mock-educations';

@Injectable({
  providedIn: 'root'
})
export class AddEducationService {

  constructor() { }

  getEducations(): Observable<Education[]> {
    const educations = of(EDUCATIONS);
    return educations;
  }
}
