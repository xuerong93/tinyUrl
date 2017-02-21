import { Component } from '@angular/core';
import { UrlService} from '../services/url.service';

export class UrlSet{
  longUrl: string;
  shortUrl: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  longUrl: string;
  shortUrl: string;

  constructor(private urlService: UrlService){

  }

  onSubmit(){
    console.log('happy new year' + this.longUrl);
    this.urlService.getShortUrl(this.longUrl);
        .subscrible(
          result =>{
            this.shortUrl = result.shortUrl;
            console.log('short url is' + this.shortUrl);
          },
          error =>{
            console.log(error);     //TODO: debug only
          }
        )
  }
}
