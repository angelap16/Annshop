import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PqrsComponent } from './pqrs/pqrs.component';

const routes: Routes = [{
  path:'',
  children:[
    {path:'inicio', component:InicioComponent},
    {path:'login-admin', component:LoginAdminComponent},
    {path:'pedidos',component:PedidosComponent},
    {path:'pqrs', component:PqrsComponent},
    {path:'**',redirectTo:'login-admin'}
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)]
 
})
export class AdminRoutingModule { }
