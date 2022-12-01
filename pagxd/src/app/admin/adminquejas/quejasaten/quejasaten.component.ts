import { Component, OnInit } from '@angular/core';
import { Queja } from 'src/app/shared/interface';
import { QuejaService } from 'src/app/queja/queja.service';

@Component({
  selector: 'app-quejasaten',
  templateUrl: './quejasaten.component.html',
  styleUrls: ['./quejasaten.component.css']
})
export class QuejasatenComponent implements OnInit {
  
  quejas: Queja[] = [];

  constructor(private QuejaService:QuejaService) { }
  filterPost = '';

  ngOnInit(): void {
    this.QuejaService.getAll().subscribe((data: Queja[])=>{
      this.quejas = data;
      console.log(this.quejas);
    })
  }

  deleteQueja(id:number){
    if(confirm('¿Se ha solucionado el problema?')){
      this.QuejaService.delete(id).subscribe(res => {
      this.quejas = this.quejas.filter(item => item.id !== id);
      console.log('Queja deleted successfully!');
      })
    }
  }
  
  atenderQueja(id:number,queja:Queja){
    queja.estado = "Atendiendo";
    this.QuejaService.update(id,queja).subscribe(res =>{
      console.log("Actualizado a Atendiendoooo");
    })
  }

  finalQueja(id:number,queja:Queja){
    queja.estado = "Finalizado";
    this.QuejaService.update(id,queja).subscribe(res =>{
      console.log("Actualizado a Finalizado");
    })
  }
}