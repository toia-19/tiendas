import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { map } from 'rxjs/operators';
import { Tiendas } from '../modelos/tiendas';

@Injectable({
  providedIn: 'root'
})
export class TiendasService {

  //referencia de base de datos para que se guarde
  private tiendasCollection: AngularFirestoreCollection<Tiendas>

  constructor(private db: AngularFirestore) {
    //creamos una variable para guardarlos 
    this.tiendasCollection = db.collection('tiendas')
  }

  obtenerTienda() {
    //retorna=devolver la colecciom y metodo para que se muestre rapido:
    return this.tiendasCollection.snapshotChanges().
      //el pipe es un operador de urxjs=>operador map retorna el nuevo arreglo->variable accion->
      pipe(map(action => action.map(a => a.payload.doc.data())))
  }
}