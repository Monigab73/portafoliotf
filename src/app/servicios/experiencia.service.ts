import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';
const httpOptions =
{
  headers: new HttpHeaders
    ({ 'Content-type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
   private url: string = "http://localhost:8080/";
   constructor(private httpClient: HttpClient) {} 
      obtenerExperiencia(): Observable<Experiencia[]> {
      return this.httpClient.get<Experiencia[]>(this.url + 'experiencia/lista', httpOptions);
      }
      agregarExperiencia(experiencia: Experiencia): Observable<Experiencia[]> {
        return this.httpClient.post<Experiencia[]>(this.url + 'experiencia/nuevo', experiencia, httpOptions);
      }
      actualizarExperiencia(experiencia: Experiencia): Observable<Experiencia[]> {
        return this.httpClient.put<Experiencia[]>(this.url + 'experiencia/actualizar', experiencia, httpOptions);
      }
      eliminarExperiencia(id: number): Observable<Experiencia[]> {
        return this.httpClient.delete<Experiencia[]>(this.url + 'experiencia/eliminar/' + id, httpOptions);
      }
  }
