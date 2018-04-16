import { Component, OnInit } from '@angular/core';
import {movieInfo} from '../shared/models/movie-info.model'
@Component({
  selector: 'app-root-component',
  templateUrl: './root-component.component.html',
  styleUrls: ['./root-component.component.css']
})
export class RootComponentComponent{
  public moviesArray:movieInfo[];
  public selectedMovie:movieInfo;

  public onChildMovieSelected(movie:movieInfo): void {
 
     this.selectedMovie = movie;
 }

 public getSelectedMovie(): movieInfo {
 
  return this.selectedMovie ;
}

  constructor() {
    this.moviesArray=[{
      id: 1,
      movie_name: "Coraline",
      price: 7.13,
      movie_date: "7/9/2017"
      }, {
      id: 2,
      movie_name: "Finding Dory",
      price: 10.09,
      movie_date: "12/12/2016"
      }, {
      id: 3,
      movie_name: "The Wailing",
      price: 10.69,
      movie_date: "3/9/2017"
      }, {
      id: 4,
      movie_name: "The Void",
      price: 8.85,
      movie_date: "10/30/2017"
      }, {
      id: 5,
      movie_name: "Tower",
      price: 8.47,
      movie_date: "4/6/2017"
      }]

   }

 

}
