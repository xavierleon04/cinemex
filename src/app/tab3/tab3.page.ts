import { Component, OnInit } from '@angular/core';
import { Genre, PeliculaDetalle } from '../interfaces/interface';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];
  favoritos: any;
  favoritoGenero: any[] = [];

  constructor( private dataLocal: DataLocalService,
               private moviesService: MoviesService  ) { }

               ngOnInit(){
                this.favoritos = this.dataLocal.cargarFavoritos();
                console.log(this.favoritos);
               }
  async ionViewWillEnter() {

      this.peliculas = await this.dataLocal.cargarFavoritos();
      this.generos = await this.moviesService.cargarGeneros();
  
      this.pelisPorGenero( this.generos, this.peliculas );

  }


  pelisPorGenero( generos: Genre[], peliculas: PeliculaDetalle[]  ) {


    this.favoritoGenero = [];

    generos.forEach( genero => {

      this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas.filter( peli => {
          return peli.genres.find( genre => genre.id === genero.id );
        })
      });

    });

    console.log(this.favoritoGenero);


  }

}
