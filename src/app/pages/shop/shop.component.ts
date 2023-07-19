import { Component, OnInit } from '@angular/core';
import { iProducto } from 'src/app/models/producto.interface'
import { DataService } from 'src/app/services/data.service';
import { DatabaseService } from 'src/app/services/database.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products:any;
  productsFiltro:any
  loading=false;
  category:any;
  constructor(
    private productService:DatabaseService,
    private dataService:DataService,
    private router:Router) { }

  ngOnInit(): void {
    this.loading=true;
    this.products=[];
    this.category=[];
    setTimeout(() => {
      this.productService.getProducts().subscribe((products:any)=>{
        this.products= products;
        this.loading=false;
        this.productsFiltro=this.products
        this.category= products.category
        console.log('PRODUCTOOOOS',products);
        console.log(this.category);
      })  
    }, 1000); 
  }
  filtroCategory(data:string){
    if(this.products!="" && data!='todo'){
      this.productsFiltro=this.products.filter((f:any)=>
        f.category.includes(data)
      ) 
      console.log('ACEP FILTRO',this.products);
    }else{
      this.productsFiltro=this.products
      console.log('no se encontro producto');
    }
    /* let accesorios = (document.getElementById('accesorios') as HTMLInputElement).checked
    let gorros = (document.getElementById('gorros') as HTMLInputElement).checked
    let ganchos = (document.getElementById('ganchos') as HTMLInputElement).checked
    let bandanas = (document.getElementById('bandanas') as HTMLInputElement).checked
    if(this.products!="" && accesorios){
      this.productsFiltro=this.products.filter((f:any)=>
        f.category.includes('llavero')
      ) 
      console.log(this.products);
    }else{
      this.productsFiltro=this.products
    } */
  }
  filtroSubcategory(data:string){
    if(this.products!=""){
      this.productsFiltro=this.products.filter((f:any)=>f.subcategory.toLowerCase().indexOf(data)>-1    
      ) 
      console.log('Filtrosub',this.products);
    }else if(this.productsFiltro=""){
      this.productsFiltro="";
      console.log('no se encontro producto en categoria');
    }
  }
  detalles(item:any){
    this.dataService.enviarDatosProducto=item
    console.log('ITEM',item);
    this.router.navigate(['/detalles'])
  }

}
