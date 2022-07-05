import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MDBResponse, Pelicula } from '../interfaces/interface';
import { MoviesService } from '../services/movies.service';
@Component({
  selector: 'app-kids',
  templateUrl: './kids.page.html',
  styleUrls: ['./kids.page.scss'],
})
export class KidsPage implements OnInit {
  peliculas: Pelicula[] = [];
  populares: Pelicula[] = [];
  dato: boolean = true;

  constructor(
    private moviesService: MoviesService,
    private toasController: ToastController
  ) {}

  ngOnInit() {
    this.moviesService.getMoviesKids().subscribe((resp: MDBResponse) => {
      console.log(resp);
      this.peliculas = resp.results;
    });
    this.getPopulares();
    this.getChamaco();
  }
  cargarMas() {
    this.getPopulares();
  }
  getChamaco() {
    this.moviesService.getPeliculasKids().subscribe((res) => {
      const arr = [...res.results];
      console.log('entra');
      console.log(res.results);
    });
  }

  getPopulares() {
    this.moviesService.getPeliculasKidsNews().subscribe(
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
