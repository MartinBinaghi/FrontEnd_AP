import { Injectable } from '@angular/core';

import {Education} from "../Education";
import { EDUCATIONS } from 'src/app/mock-educations';

@Injectable({
  providedIn: 'root'
})
export class AddEducationService {

  constructor() { }

  getEducations(): Education[] {
    return EDUCATIONS;
  }
}
