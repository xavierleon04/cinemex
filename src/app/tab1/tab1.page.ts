import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MDBResponse, Pelicula } from '../interfaces/interface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  peliculas: Pelicula[] = [];
  populares: Pelicula[] = [];
  dato: boolean = true;

  constructor(
    private moviesService: MoviesService,
    private toasController: ToastController
  ) {}

  ngOnInit() {
    this.moviesService.getFeacture().subscribe((resp: MDBResponse) => {
      this.peliculas = resp.results;
    });
    this.getPopulares();
  }
  cargarMas() {
    this.getPopulares();
  }

  getPopulares() {
    this.moviesService.getPopulares().subscribe(
      (resp) => {
        const arrTemp = [...this.populares, ...resp.results];
        this.populares = arrTemp;
      },
      (err) => {
        this.presentToast();
        this.dato = false;
      }
    );
  }
  async presentToast() {
    const toast = await this.toasController.create({
      message:
        'LLegaste al limite de peliculas te recomiendo ver la sección de cartelera',
      duration: 800,
      position: 'top',
    });
    toast.present();
  }
}
