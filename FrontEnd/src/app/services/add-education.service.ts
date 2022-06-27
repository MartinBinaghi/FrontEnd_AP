import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';

import {Observable, of} from 'rxjs';

import {Education} from "../Education";
import { EDUCATIONS } from 'src/app/mock-educations';

@Injectable({
  providedIn: 'root'
})
export class AddEducationService {

  private apiUrl = 'http://localhost:3000/educations' //Luego voy a tener que modificarla creo para incorporar experiences//

  constructor(
    private http:HttpClient 
  ) { }

  getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(this.apiUrl)
  }

  deleteEducation(education: Education): Observable<Education> {
    const url = `${this.apiUrl}/${education.id}`;
    return this.http.delete<Education>(url);
  }
}
