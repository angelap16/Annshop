import { Injectable } from '@angular/core';
import{ AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { map, Observable } from 'rxjs';
import { iProducto } from '../models/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  $products: Observable<iProducto[]>|any;
  productsCollection:AngularFirestoreCollection;
  productDoc:any;
  producto:any
  constructor(public db:AngularFirestore) {
    /*  this.$products=this.db.collection('products').valueChanges();  */
     this.productsCollection= this.db.collection('products');
    this.$products=this.productsCollection.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
       const data= a.payload.doc.data() as iProducto;
       data.id=a.payload.doc.id;
       return data
      }) 
    })) 
   }
  getProducts(){
    return this.$products;
  }
  ObtenerProductoPorId(id:string):Promise<iProducto> | undefined{
    let baseDatos:[]|any
    this.getProducts().subscribe((products:any)=>{
      baseDatos=products
      console.log('base', products);
      this.producto= baseDatos.find((producto:iProducto)=>producto.id===id);
      console.log('id concidente 2', this.producto);
    })      
    if(this.producto){
      console.log('CONSIGUIO', this.producto);
      return Promise.resolve(this.producto);
    }else{
      return;
    }
  } 

}
