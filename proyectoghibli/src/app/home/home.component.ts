import { Component, OnInit } from '@angular/core';
import { Films } from '../model/films';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films:Films[];
  film:Films[];
  constructor(private filmsghibli:FilmService) { }
 
  ngOnInit(): void {
    this.filmsghibli.getFilms().subscribe(peliculas=>this.films=peliculas);
  }

}