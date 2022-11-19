import { Component, OnInit } from '@angular/core';
import { Tiendas } from 'src/app/modelos/tiendas';
import { TiendasService } from 'src/app/servicios/tiendas.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.page.html',
  styleUrls: ['./comida.page.scss'],
})
export class ComidaPage implements OnInit {
  coleccionTiendas: Tiendas[] = [];

  constructor(private serviciosTiendas: TiendasService ) { } //se declara en privado 

  ngOnInit(): void {
    this.serviciosTiendas.obtenerTienda().subscribe((tienda) => {
      this.coleccionTiendas = tienda;
      console.log(tienda);
    });
  }
}