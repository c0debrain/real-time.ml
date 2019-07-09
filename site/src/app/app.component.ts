import {Component} from '@angular/core';
import {MarketStatusService} from './market-status.service';
import {TweetTextService} from './tweet-text.service';
import {Observable} from 'rxjs';
import {MarketPrice} from './market-price';
import {TweetText} from './tweet-text';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faLink = faLink;
  marketStatus: MarketPrice[];
  marketStatusToPlot: MarketPrice[];

  tweetStatus: TweetText;
  tweetToShow: string;
  tweetId: string;
  set MarketStatus(status: MarketPrice[]) {
    this.marketStatus = status;
    this.marketStatusToPlot = this.marketStatus.slice(0, 20);
  }

  set TweetStatus(status: TweetText) {
    this.tweetStatus = status;
    this.tweetId = this.tweetStatus.id_str;
    this.tweetToShow = "https://twitter.com/" + this.tweetStatus.user_screen_name + "/status/" + this.tweetStatus.id_str;
  }
  constructor(private marketStatusSvc: MarketStatusService, private tweetTextSvc: TweetTextService) {
    this.marketStatusSvc.getInitialMarketStatus()
      .subscribe(prices => {
        this.MarketStatus = prices;

        let marketUpdateObservable =  this.marketStatusSvc.getUpdates();  // 1
        marketUpdateObservable.subscribe((latestStatus: MarketPrice) => {  // 2
          this.MarketStatus = [latestStatus].concat(this.marketStatus);  // 3
        });  // 4
      });
    this.tweetTextSvc.getInitialTweetTextStatus()
      .subscribe((tweets) => {
        this.TweetStatus = new TweetText(tweets);
        let tweetStatusObservable =  this.tweetTextSvc.getUpdates();
        tweetStatusObservable.subscribe((latestStatus: TweetText) => {
          console.log(tweets);
          this.TweetStatus = latestStatus;
          //console.log("in app comp" + this.tweetStatus);
        });
      });
  }
}
