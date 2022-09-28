import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Proyectos } from 'src/app/modelos/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  listaProyectos:Proyectos[];
  formProyectos:FormGroup;
  formActualizarProyectos:FormGroup;
  
  constructor(private servicio: ProyectosService,private fb:FormBuilder) {}

  ngOnInit(): void {
   this.adquirirLista();
   this.crearForm();
   this.crearFormActualizarProyectos();
  }
  crearForm() {
    this.formProyectos= this.fb.group({
    id:[""],
    descripcion:[""],
    fechaRealizacion:[""],
    nombre:[""],
    urlRepositorio:[""],
    imagen:[""],
    fechaFinalizacion:[""]
    });
  }
  crearFormActualizarProyectos() {
    this.formProyectos= this.fb.group({
    id:[""],
    descripcion:[""],
    fechaRealizacion:[""],
    nombre:[""],
    urlRepositorio:[""],
    imagen:[""],
    fechaFinalizacion:[""]
    });
  }
  adquirirLista() {
    this.servicio.obtenerProyectos().subscribe(data => {
    this.listaProyectos= data}); 
  }
  nuevoProyecto(){
    let proyectos:Proyectos=this.formProyectos.value;
    this.servicio.agregarProyectos(proyectos).subscribe(data => {
    this.adquirirLista();
    this.formProyectos.reset()
    });
  }
  actualizarProyectos(){
    let proyectos:Proyectos=this.formActualizarProyectos.value;
    this.servicio.actualizarProyectos(proyectos).subscribe(data =>{
    this.adquirirLista();
    this.formProyectos.reset()
    });
  }
  eliminarProyectos(id:number){
      this.servicio.eliminarProyectos(id).subscribe(data => {
      this.adquirirLista();
     });
  }
}
  



 



