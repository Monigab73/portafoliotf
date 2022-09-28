import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion';

const httpOptions={
  headers: new HttpHeaders
    ({'Content-type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private url: string = "https://git.heroku.com/warm-dawn-74315.git";

  constructor(private httpClient: HttpClient) { }

    obtenerEducacion(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.url + 'educacion/lista', httpOptions);
    }
    agregarEducacion(educacion:Educacion): Observable<Educacion[]> {
      return this.httpClient.post<Educacion[]>(this.url + 'educacion/nuevo', educacion, httpOptions);
    }
    actualizarEducacion(educacion:Educacion): Observable<Educacion[]> {
      return this.httpClient.put<Educacion[]>(this.url + 'educacion/actualizar', educacion, httpOptions);
    }
    eliminarEducacion(id:number): Observable<Educacion[]> {
      return this.httpClient.delete<Educacion[]>(this.url + 'educacion/eliminar/' + id, httpOptions);
    }
}
