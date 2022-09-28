import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';

import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    CabeceraComponent,
    PersonaComponent,
    ProyectosComponent,
    PortafolioComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
