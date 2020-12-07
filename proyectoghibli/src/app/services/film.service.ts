import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Films } from '../model/films';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  //private serverUrl:string = environment.apiUrl;
  private serverUrl: string = 'https://ghibliapi.herokuapp.com/';
  private headers:HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  });
  constructor(private http:HttpClient) { }

  getFilms():Observable<Films[]>{
   return this.http.get<Films[]>(this.serverUrl + "films", {headers:this.headers});
  }

  getPelicula(id):Observable<Films[]>{
    return this.http.get<Films[]>(this.serverUrl + 'films/' + id, {headers:this.headers});
  }
}
