import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'PASTE YOUR API KEY HERE';


  constructor(private http:HttpClient) { }

  // Now, for the initSources function, we simply prepare our left-side menu with some news resources.
  initSources(){
	 return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }

  // After that, we’ve created another function, initArticles which retrieves the first articles from TechCrunch
  //   once the application gets started.
  initArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
  // As for the last function, getArticlesByID, it’s going to simply bring some articles for the passing parameter.
  getArticlesByID(source: String){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }



}
