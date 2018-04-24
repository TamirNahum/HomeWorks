import { Component, OnInit } from '@angular/core';
import { Articale} from '../shared/models/article.model';
import { ArticaleService } from '../shared/services/articaleService.service';

@Component({
  selector: 'app-articles-list-component',
  templateUrl: './articles-list-component.component.html',
  styleUrls: ['./articles-list-component.component.css']
})
export class ArticlesListComponentComponent implements OnInit {

Articales:Articale[];
selectedArticale:Articale;

constructor(private myService:ArticaleService) { }

  ngOnInit() {
      this.Articales=this.myService.articaleFullList;
      this.selectedArticale=this.myService.selectedArticale;
  }



  myFunc(articale:Articale):void{

    this.myService.changeSelctedArticale(articale);
    this.selectedArticale=this.myService.getSelctedArticale();

  };
}
