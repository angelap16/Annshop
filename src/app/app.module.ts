import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormContactoComponent } from './components/form-contacto/form-contacto.component';
import { AboutAnnsComponent } from './components/about-anns/about-anns.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AngularFireModule } from '@angular/fire/compat';
import{AngularFirestoreModule}from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModelModule } from './components/admin/admin-model.module';
import { CardComponent } from './components/card/card.component';
import { RegistroUserComponent } from './components/users/registro-user/registro-user.component';
import { InicioSesionUserComponent } from './components/users/inicio-sesion-user/inicio-sesion-user.component';
import { PanelUserComponent } from './components/users/panel-user/panel-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductDetailComponent,
    FormContactoComponent,
    AboutAnnsComponent,
    ShopComponent,
    SpinnerComponent,
    CardComponent,
    RegistroUserComponent,
    InicioSesionUserComponent,
    PanelUserComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
