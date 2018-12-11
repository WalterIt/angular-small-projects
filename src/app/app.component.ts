import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * We’re defining two properties here: mArticles, for holding news articles, and mSources, for holding
   *  news resources. Both are defined as an array.
   */
	mArticles: Array<any>;
	mSources: Array<any>;

	constructor(private newsapi:NewsApiService){
		console.log('app component constructor called');
	}

	ngOnInit() {
        //load articles
	    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
		this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);
    }

  /**
   * For the searchArticles function, it will be triggered whenever the user selects a specific resource from
   *  the left-side menu. Then we’re passing this parameter to the getArticlesByID service provider function to
   *  retrieves articles for it.
   */
	searchArticles(source){
		console.log("selected source is: "+source);
		this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
	}

}
