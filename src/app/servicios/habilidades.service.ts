import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../modelos/habilidades';
const httpOptions =
{
  headers: new HttpHeaders
    ({ 'Content-type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class HabilidadesService {
  private url: string = "https://warm-dawn-74315.herokuapp.com/";
  
  constructor(private httpClient: HttpClient) { }
    obtenerHabilidades(): Observable<Habilidades[]> {
    return this.httpClient.get<Habilidades[]>(this.url + 'habilidades/lista', httpOptions);
    }
    agregarHabilidades(habilidades:Habilidades): Observable<Habilidades[]> {
      return this.httpClient.post<Habilidades[]>(this.url + 'habilidades/nuevo', habilidades, httpOptions);
    }
    actualizarHabilidades(habilidades: Habilidades): Observable<Habilidades[]> {
      return this.httpClient.put<Habilidades[]>(this.url + 'habilidades/actualizar', habilidades, httpOptions);
    }
    eliminarHabilidades(id: number): Observable<Habilidades[]> {
      return this.httpClient.delete<Habilidades[]>(this.url + 'habilidades/eliminar/' + id, httpOptions);
    }
}
