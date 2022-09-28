import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';
const httpOptions =
{
  headers: new HttpHeaders
    ({ 'Content-type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url: string = "https://warm-dawn-74315.herokuapp.com/";
  constructor(private httpClient: HttpClient) { }

    obtenerPersona(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url + 'persona/ver', httpOptions);
    }
    agregarPersona(persona: Persona): Observable<Persona[]> {
      return this.httpClient.post<Persona[]>(this.url + 'persona/nuevo', persona, httpOptions);
    }
    actualizarPersona(persona: Persona): Observable<Persona[]> {
      return this.httpClient.put<Persona[]>(this.url + 'persona/actualizar', persona, httpOptions);
    }
    eliminarPersona(id: number): Observable<Persona[]> {
      return this.httpClient.delete<Persona[]>(this.url + 'persona/eliminar/' + id, httpOptions);
    }
}
