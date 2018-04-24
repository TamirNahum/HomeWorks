import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ArticlesListComponentComponent } from './articles-list-component/articles-list-component.component';
import { ArticleInfoComponentComponent } from './article-info-component/article-info-component.component';
import { ArticaleService } from './shared/services/articaleService.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    ArticlesListComponentComponent,
    ArticleInfoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArticaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
