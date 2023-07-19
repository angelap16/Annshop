import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAnnsComponent } from './components/about-anns/about-anns.component';
import { FormContactoComponent } from './components/form-contacto/form-contacto.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'detalles', component:ProductDetailComponent},
  {path:'contacto', component:FormContactoComponent},
  {path:'About anns', component:AboutAnnsComponent},
  {path:'shop', component:ShopComponent},
  {path:'card', component:CardComponent},
  {path:'admin',loadChildren:()=>import('./components/admin/admin-model.module').then(m=> m.AdminModelModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
