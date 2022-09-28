import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  listaEducacion:Educacion[];
  formEdu:FormGroup;
  formActualizarEducacion:FormGroup;  
  
constructor(private servicio:EducacionService,private fb:FormBuilder) {}

  ngOnInit():void {
    this.adquirirLista();
    this.crearForm();
    this.crearFormActualizarEducacion();
   }
  crearForm() {
    this.formEdu= this.fb.group({
    id: [""],
    institucion: [""],
    titulo: [""],
    fechaInicio: [""],
    fechaFinalizacion: [""],
    imagen: [""]
    });
  }
  crearFormActualizarEducacion() {
    this.formActualizarEducacion= this.fb.group({
    id: [""],
    institucion: [""],
    titulo: [""],
    fechaInicio: [""],
    fechaFinalizacion: [""],
    imagen: [""]
    });
  }
  adquirirLista(){
    this.servicio.obtenerEducacion().subscribe (data => {
    this.listaEducacion= data});
    }
    
  nuevaEducacion(){
    let educacion:Educacion=this.formEdu.value;
    this.servicio.agregarEducacion(educacion).subscribe(data => {
    this.adquirirLista();
    this.formEdu.reset()
    });
  }
  actualizarEducacion(){
    let educacion:Educacion=this.formActualizarEducacion.value;
    this.servicio.actualizarEducacion(educacion).subscribe(data =>{
    this.adquirirLista();
    this.formEdu.reset()
    });
  }
  eliminarEducacion(id:number){
    this.servicio.eliminarEducacion(id).subscribe(data => {
    this.adquirirLista();
    });
  }
}
  
  
  
  
 