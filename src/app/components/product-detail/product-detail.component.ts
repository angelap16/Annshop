import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { iProducto } from 'src/app/models/producto.interface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  $data!: Observable<any>;
  productoSeleccionado: any;
  productoId: iProducto | any;
  idProduct: any;
  valido: any;
  baseDatos: any;
  active = false;
  constructor(
    private servicio: DataService,
    private router: Router,
    private dataBase: DatabaseService
  ) {}

  ngOnInit(): void {
    this.recibirDatos();
  }
  recibirDatos() {
    this.$data = this.servicio.obtenerDatoProducto;
    this.$data.subscribe((recive) => {
      this.productoSeleccionado = recive;
      this.idProduct = recive.id;
    });
    console.log('recibiendo 1', this.productoSeleccionado);
    console.log('id recibido', this.idProduct);
    this.obtenerProductoSelect(this.idProduct);
  }
  obtenerProductoSelect(id: string) {
    this.dataBase.getProducts().subscribe((products: any) => {
      this.baseDatos = products;
      this.productoId = this.baseDatos.find(
        (producto: iProducto) => producto.id === id
      );
      console.log('baseeeee', this.baseDatos);
      console.log('producto seleccionado', this.productoId);
    });
  }
  disminuirCantidad(item: any) {
    if (item > 0) {
      this.productoId.cantidad--;
    } else {
      Swal.fire({
        title: 'Atención!',
        text: 'No puedes agregar una cantidad menor a cero',
        icon: 'warning',
        confirmButtonText: 'aceptar',
      });
    }
  }
  agregarFavorito(producto:any){
    this.active=true;
    producto++
  }
  incrementarCantidad() {
    this.productoId.cantidad++;
  }
  productoRepetido() {
    let productoExistente: any;
    let productoValido: [] | any = [];
    let productosCarrito = JSON.parse(
      localStorage.getItem('productos en carrito')!
    );
    if (productosCarrito != '' && productosCarrito != null) {
      console.log('carrito', productosCarrito);
      productosCarrito.forEach((element: any) => {
        productoExistente = element.id;
        if (productoExistente == this.productoId.id) {
          productoValido.push('false');
        } else {
          productoValido.push('true');
        }
        console.log('array?', productoValido);

        this.valido = productoValido.find((data: any) => data == 'false');
        console.log('LO ENCONTRO', this.valido);
      });
    }
    console.log('comparacion', this.productoId.id);
  }
  agregarAlCarrito() {
    this.productoRepetido();
    if (this.productoId.cantidad <= 0) {
      Swal.fire({
        title: 'Atención!',
        text: 'Elige una cantidad valida',
        icon: 'warning',
        confirmButtonText: 'aceptar',
      });
    } else {
      if (this.valido == 'false') {
        Swal.fire({
          title: 'Atención!',
          text: 'Este producto ya se encuentra en tu carrito',
          icon: 'warning',
          confirmButtonText: 'aceptar',
        });
      } else {
        this.servicio.enviarAlCarrito = this.productoId;
        console.log('ENVIANDO PRODUCTO AL CARRO', this.productoId);
        Swal.fire({
          title: '¡Producto agregado al carrito!',
          text: `acabas de agregar ${this.productoId.name} al carrito de compras`,
          icon: 'success',
          confirmButtonText: 'aceptar',
        });
      }
    }
  }
}
