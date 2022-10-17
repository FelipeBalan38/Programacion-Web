import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviadoComponent } from './AtencionC/enviado/enviado.component';
import { HomeComponent } from './home/home.component';
import { AvisosComponent } from './section/avisos/avisos.component';
import { FondPComponent } from './section/fond-p/fond-p.component';
import { InformacionComponent } from './section/informacion/informacion.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'infor',component:InformacionComponent},
  {path:'ATC', component:FondPComponent},
  {path:'Envio', component:EnviadoComponent},
  {path:'Avisos', component:AvisosComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
