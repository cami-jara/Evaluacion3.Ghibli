import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
  
export class FilmComponent implements OnInit {
  id: any;
  film: any;
  nombre: string;
  director: string;
  description: string;
  realease_date: string;
  rt_score: string;
  
  constructor(private filmsghibli: FilmService, private route: ActivatedRoute,) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.filmsghibli.getPelicula(this.id).subscribe(pelicula => {
      this.film = pelicula;
      this.nombre = this.film.title;
      this.director = this.film.director;
      this.description = this.film.description;
      this.realease_date = this.film.realease_date;
      this.rt_score = this.film.rt_score;
    });
  }

  ngOnInit(): void {
  }

}

