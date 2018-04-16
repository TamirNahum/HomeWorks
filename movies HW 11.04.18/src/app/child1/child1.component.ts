import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {movieInfo} from '../shared/models/movie-info.model'


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component{

@Input() movie:movieInfo;

@Output() movieEmitter: EventEmitter<movieInfo>= new EventEmitter<movieInfo>();


public onMovieSelected(): void {

  this.movieEmitter.emit(this.movie);
  console.log("123");
  
} 

// public onMovieSelected():void{
// this.movieEmitter.emit(this.movie.id);
// }

}
