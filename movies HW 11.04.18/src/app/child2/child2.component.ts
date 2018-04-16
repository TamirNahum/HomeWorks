import { Component, OnInit, Input } from '@angular/core';
import { movieInfo } from '../shared/models/movie-info.model';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
@Input() selectedMovie:movieInfo;
  constructor() { }

 

}
