import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  listaExperiencia:Experiencia[];
  formExp:FormGroup;
  formActualizarExperiencia:FormGroup;  
  
  constructor(private servicio: ExperienciaService,private fb:FormBuilder) {}

  ngOnInit(): void { 
    this.adquirirLista();
    this.crearForm(); 
    this.crearFormActualizarExperiencia();
  }
  crearForm() {
  this.formExp= this.fb.group({
    id:[""],
    empresa:[""],
    puesto:[""],
    fechaInicio:[""],
    fechaFinalizacion:[""],
    imagen:[""]
  });
}
crearFormActualizarExperiencia() {
  this.formActualizarExperiencia= this.fb.group({
  id: [""],
  institucion: [""],
  titulo: [""],
  fechaInicio: [""],
  fechaFinalizacion: [""],
  imagen: [""]
  });
}
adquirirLista() {
    this.servicio.obtenerExperiencia().subscribe(data => {
    this.listaExperiencia= data});
  }
nuevaExperiencia(){
      let experiencia:Experiencia=this.formExp.value;
      this.servicio.agregarExperiencia(experiencia).subscribe(data => {
      this.adquirirLista();
      this.formExp.reset()
      });
  }
actualizarExperiencia(){
      let experiencia:Experiencia=this.formExp.value;
      this.servicio.actualizarExperiencia(experiencia).subscribe(data =>{
      this.adquirirLista();
      this.formExp.reset()
      });
  }
eliminarExperiencia(id:number){
      this.servicio.eliminarExperiencia(id).subscribe(data => {
      this.adquirirLista();
      });
    }
  }