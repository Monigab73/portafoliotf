import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  listaPersona:Persona[];
  formPer:FormGroup;
  formActualizarPersona:FormGroup;
  
  constructor(private servicio: PersonaService,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.adquirirLista();
    this.crearForm();
   
  }
  crearForm() {
    this.formPer= this.fb.group({
    id:[""],
    imagen:[""],
    nombreYapellido:[""],
    titulo:[""],
    ubicacion:[""],
    acercaDeMi:[""]
    });
  }
  
  adquirirLista() {
    this.servicio.obtenerPersona().subscribe(data => {
    this.listaPersona= data}); 
  }
  nuevaPersona(){
    let persona:Persona=this.formPer.value;
    this.servicio.agregarPersona(persona).subscribe(data => {
    this.adquirirLista();
    this.formPer.reset()
    });
  }
  actualizarPersona(){
    let persona:Persona=this.formActualizarPersona.value;
    this.servicio.actualizarPersona(persona).subscribe(data => {
    this.adquirirLista();
    this.formPer.reset()
    });
  }

  eliminarPersona(id:number){
    this.servicio.eliminarPersona(id).subscribe(data => {
    this.adquirirLista();
    this.formPer.reset()
    });
  }
}








 
