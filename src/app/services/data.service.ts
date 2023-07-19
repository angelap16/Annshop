import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private producto:BehaviorSubject<any>=new BehaviorSubject<any>({})
  private datoCarrito:BehaviorSubject<any>=new BehaviorSubject<any>({})
  private productoCarrito:BehaviorSubject<any>=new BehaviorSubject<any>({})
  constructor(private http: HttpClient) { }

  get getCarrito(){
    return this.datoCarrito.asObservable()
  }
  get obtenerDatoProducto(){
    return this.producto.asObservable()
  }
  get obtenerMcia(){
    return this.productoCarrito.asObservable()
  }
  set enviarDatosProducto(data:any){
    this.producto.next(data)
  }
  set enviarAlCarrito(data:any){
    this.productoCarrito.next(data)
  }
  set setCarrito(data:any){
    this.datoCarrito.next(data)
  }

  getPaises(){
    return  this.http.get("https://restcountries.com/v3.1/all")
  }

  
}