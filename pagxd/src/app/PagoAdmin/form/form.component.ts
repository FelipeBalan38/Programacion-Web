import { Component, OnInit} from '@angular/core';
import { PagoService } from 'src/Service/pago.service';
import {Pago} from 'src/shared/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   
  [x: string]: any;

  pagos!: Pago[];

  constructor(private readonly PagoService:PagoService) { }
  
  ngOnInit(): void {
    this.PagoService.getPagos().subscribe(pagos=>{
      this.pagos = [...pagos];
    });
  }

  deletePago(id:String){
    this.PagoService.deletePago(id).subscribe(res => {
      this.pagos = this.pagos.filter(item => item.id !== id);
      console.log('Pago deleted successfully!');
 })
}
//////////////////////////////////////////////////
pagoAprob(id:String, pago:Pago){
  pago.activador="Adeuda";
  this.PagoService.updatePago(id, pago).subscribe(res =>{
    console.log("Ok");
  })
}
pagoDeneg(id:String, pago:Pago){
  pago.activador="Pagado";
  this.PagoService.updatePago(id, pago).subscribe(res =>{
    console.log("Ok");
  })
}

updatePago(id:String, pago:Pago){
  this.PagoService.updatePago(id, pago).subscribe(res =>{
    console.log("Ok");
  })
}
}



