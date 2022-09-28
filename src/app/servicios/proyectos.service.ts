import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../modelos/proyectos';
const httpOptions =
{
  headers: new HttpHeaders
    ({ 'Content-type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private url: string = "https://git.heroku.com/warm-dawn-74315.git";
  constructor(private httpClient: HttpClient) { }

    obtenerProyectos(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.url + 'proyectos/ver', httpOptions);
    }
    agregarProyectos(proyectos: Proyectos): Observable<Proyectos[]> {
      return this.httpClient.post<Proyectos[]>(this.url + 'proyectos/nuevo', proyectos, httpOptions);
    }
    actualizarProyectos(proyectos: Proyectos): Observable<Proyectos[]> {
      return this.httpClient.put<Proyectos[]>(this.url + 'proyectos/actualizar', proyectos, httpOptions);
    }
    eliminarProyectos(id: number): Observable<Proyectos[]> {
      return this.httpClient.delete<Proyectos[]>(this.url + 'proyectos/eliminar/' + id, httpOptions);
    }
}
