import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './section/header/header.component';
import { FondComponent } from './section/fond/fond.component';
import { TituloComponent } from './section/titulo/titulo.component';
import { PieComponent } from './section/pie/pie.component';
import { CarruselComponent } from './section/carrusel/carrusel.component';
import { InformacionComponent } from './section/informacion/informacion.component';
import { PlanComponent } from './seccion2/plan/plan.component';
import { AtencionCComponent } from './atencion-c/atencion-c.component';
import { EnviadoComponent } from './AtencionC/enviado/enviado.component';
import { FormularioComponent } from './AtencionC/formulario/formulario.component';
import { FondPComponent } from './section/fond-p/fond-p.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AvPagoComponent } from './av-pago/av-pago.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FondComponent,
    TituloComponent,
    PieComponent,
    CarruselComponent,
    InformacionComponent,
    PlanComponent,
    AtencionCComponent,
    EnviadoComponent,
    FormularioComponent,
    FondPComponent,
    HomeComponent,
    AvPagoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
