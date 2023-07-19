import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { InicioComponent } from './inicio/inicio.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PqrsComponent } from './pqrs/pqrs.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { NavAdminComponent } from './nav-admin/nav-admin.component';


@NgModule({
  declarations: [
    LoginAdminComponent,
    InicioComponent,
    PedidosComponent,
    PqrsComponent,
    NavAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule

  ]
})
export class AdminModelModule { }
