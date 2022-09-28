import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Habilidades } from 'src/app/modelos/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  listaHabilidades:Habilidades[];
  formHab:FormGroup;
  formActualizarHabilidades:FormGroup;

  constructor(private servicio: HabilidadesService,private fb:FormBuilder) { }

  ngOnInit(): void { 
    this.adquirirLista();
    this.crearForm(); 
    this.crearFormActualizarHabilidades();
  }
  crearForm() {
    this.formHab= this.fb.group({
    id:[""],
    habilidades:[""],
    imagen:[""],
    porcentajeHabilidades:[""]
    });
  }
  crearFormActualizarHabilidades() {
    this.formActualizarHabilidades= this.fb.group({
    id:[""],
    habilidades:[""],
    imagen:[""],
    porcentajeHabilidades:[""]
    });
  }

  adquirirLista() {
    this.servicio.obtenerHabilidades().subscribe(data => {
    this.listaHabilidades= data}); 
  }
  nuevaHabilidades(){
    let habilidades:Habilidades=this.formHab.value;
    this.servicio.agregarHabilidades(habilidades).subscribe(data => {
    this.adquirirLista();
    });
  }
  actualizarHabilidades(){
    let habilidades:Habilidades=this.formHab.value;
    this.servicio.actualizarHabilidades(habilidades).subscribe(data => {
    this.adquirirLista();
    });
  }
  eliminarHabilidades(id:number){
    this.servicio.eliminarHabilidades(id).subscribe(data => {
    this.adquirirLista();
    this.formHab.reset()
    });
  }
}




  