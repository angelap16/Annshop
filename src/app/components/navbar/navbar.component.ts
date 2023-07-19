import { Component, OnInit, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cantidad=0;
  active:any;
  $dato!:Observable<any>;
  productoRecibido:any
  mostrar:any;
  total=0;
  $producto!:Observable<any>;
  productosCarrito:[]|any=[];
  productoId:any;
  currentRoute:any;
  
  constructor(
    private router:Router,
    private servicio:DataService,
    private productService:DatabaseService) { }

  ngOnInit(): void {
    this.subtotal()
    this.recibirProducto() 
    this.productosActuales()
  }
  mostrarMenu(){
    let mainNav=document.getElementById('main-nav') as HTMLElement
    mainNav.classList.toggle('mostrar')
  }
 /*  routerTo(e:any){
    this.router.navigate(['/' + e])
    console.log('RUTA', e);
  } */
  verCarrito(){
    this.active=true;
    this.subtotal()
  } 
  recibirProducto(){
    this.$producto=this.servicio.obtenerMcia;
    this.$producto.subscribe((data)=>{  
      console.log('PRUEBA', data);
      if( Object.keys(data).length === 0){
        console.log('esta vacio');
        this.mostrar=false
      }else{
        this.cantidad= this.productosCarrito.length + 1
        this.productosCarrito.push(data)
        this.productosActuales()
        this.mostrar=true
        this.subtotal()
        console.log('al array',this.productosCarrito);  
      }   
    })
   }
  ocultarCarrito(){
    if(this.productosCarrito.length==0){
      this.mostrar=false;
  }
  }
  productosActuales(){
    let enviarlocal= localStorage.setItem('productos en carrito', JSON.stringify(this.productosCarrito))
  }
  eliminarProducto(data:any){
    this.productosCarrito= this.productosCarrito.filter((producto:any)=>producto != data)
    console.log("array nuevo",this.productosCarrito);
    this.cantidad=this.productosCarrito.length
    this.productosActuales()
    this.subtotal()
    this.ocultarCarrito()
  }
  disminuirCantidad(producto:any) {
   producto.cantidad--; 
   this.subtotal()
  }
  
  incrementarCantidad(producto:any) {
    producto.cantidad++;
    this.subtotal()
    console.log('DEL FOR',producto.cantidad);
  }
  subtotal(){
    this.total=0
   this.productosCarrito.forEach((producto:any)=>{
    this.total+= producto.price * producto.cantidad
    console.log('FUNCION SUBTOTAL', this.total +" "+ producto.price +" "+ producto.cantidad);
   })
  }
  filtro(){
    this.router.navigate(['/shop'])
  }

}
