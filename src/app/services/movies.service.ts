import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  Genre,
  MDBResponse,
  PeliculaDetalle,
  RespuestaCredits,
} from '../interfaces/interface';
const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private popularesPage = 485;
  generos: Genre[] = [];
  kidsPage: number = 1;

  constructor(private http: HttpClient) {
    this.getMoviesKids();
  }

  getFeacture() {
    const hoy = new Date();
    const ultimoDia = new Date(
      hoy.getFullYear(),
      hoy.getMonth() + 1,
      0
    ).getDate();
    const month = hoy.getMonth() + 1;

    let mesString = month < 10 ? `0${month}` : month;

    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    return this.ejecutarQuery<MDBResponse>(
      `/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`
    );
  }
  private ejecutarQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;

    return this.http.get<T>(query);
  }
  getPopulares() {
    this.popularesPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.ejecutarQuery<MDBResponse>(query);
  }
  getPeliculaDetalle(id: string) {
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }

  getActoresPelicula(id: string) {
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }

  cargarGeneros(): Promise<Genre[]> {
    return new Promise((resolve) => {
      this.ejecutarQuery(`/genre/movie/list?a=1`).subscribe((resp) => {
        this.generos = resp['genres'];
        resolve(this.generos);
      });
    });
  }
  buscarPeliculas(texto: string) {
    return this.ejecutarQuery(`/search/movie?query=${texto}`);
  }
  getMoviesKids() {
    const hoy = new Date();
    const ultimoDia = new Date(
      hoy.getFullYear(),
      hoy.getMonth() + 1,
      0
    ).getDate();
    const month = hoy.getMonth() + 1;

    let mesString = month < 10 ? `0${month}` : month;

    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    return this.ejecutarQuery<MDBResponse>(
      `/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}&with_genres=16&certification_country=US&certification.lte=PG&include_adult=false`
    );
  }
  getPeliculasKids() {
    this.kidsPage++;
    const query = `/discover/movie?certification_country=US&certification.lte=G&with_genres=16&include_adult=false&sort_by=popularity.desc&page=${this.kidsPage}`;

    console.log('lmxl', this.ejecutarQuery<MDBResponse>(query));
    return this.ejecutarQuery<MDBResponse>(query);
  }
  getPeliculasKidsNews() {
    this.kidsPage++;
    const query = `/discover/movie?certification_country=US&certification.lte=G&with_genres=16&include_adult=false&sort_by=popularity.desc&page=${this.kidsPage}`;
    return this.ejecutarQuery<MDBResponse>(query);
  }
}
