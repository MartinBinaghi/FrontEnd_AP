import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class SHabilidadService {
  habURL = 'https://backendap1.herokuapp.com/habilidad/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.habURL + 'lista');
  }

  public detail(id: number): Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.habURL + `detail/${id}`);
  }

  public save(habilidad: Habilidad): Observable<any>{
    return this.httpClient.post<any>(this.habURL + 'create', habilidad);
  }

  public update(id: number, habilidad: Habilidad): Observable<any>{
    return this.httpClient.put<any>(this.habURL + `update/${id}`, habilidad);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.habURL + `delete/${id}`);
  }
}
