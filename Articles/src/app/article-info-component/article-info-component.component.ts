import { Component, OnInit } from '@angular/core';
import { Articale} from '../shared/models/article.model';
import { ArticaleService } from '../shared/services/articaleService.service';

@Component({
  selector: 'app-article-info-component',
  templateUrl: './article-info-component.component.html',
  styleUrls: ['./article-info-component.component.css']
})
export class ArticleInfoComponentComponent implements OnInit {

  Articales:Articale[];
  selectedArticale:Articale=this.myService.getSelctedArticale();
  constructor(private myService:ArticaleService) { }
  
    ngOnInit() {
        this.Articales=this.myService.articaleFullList;
        this.selectedArticale=this.myService.getSelctedArticale();
    }

    setSelectedAtrticale(x:Articale):void{
      this.selectedArticale=this.myService.getSelctedArticale();
    }


}
