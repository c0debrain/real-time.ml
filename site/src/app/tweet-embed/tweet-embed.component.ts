import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { TweetText } from '../tweet-text';
@Component({
  selector: 'app-tweet-embed',
  templateUrl: './tweet-embed.component.html',
  styleUrls: ['./tweet-embed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TweetEmbedComponent {
  @Input()
  tweetStatus: string;
  @Input()
  tweetId:string;
  first = 1;
  second = 2;
  third = 3;
  
  ngOnInit() {
  }

  ngOnChanges() {
    console.log("ok");
    if (this.tweetId){
      // Don't ask....
      this.first = (this.first > 2) ? this.first = 1 : this.first += 1;
      this.second = (this.second > 2) ? this.second = 1 : this.second += 1;
      this.third = (this.third > 2) ? this.third = 1 : this.third += 1;
      // @ts-ignore
      twttr.widgets.createTweet(
        this.tweetId,
        document.getElementById("tw-" + this.first)
      );
      // @ts-ignore
      twttr.widgets.createTweet(
        this.tweetId,
        document.getElementById("tw-" + this.second)
      );
      while (document.getElementsByClassName("tw-" + this.third)[0].childElementCount > 0){
        document.getElementsByClassName("tw-" + this.third)[0].firstChild.remove();
      }
      while (document.getElementsByClassName("tw-" + this.second)[0].childElementCount > 1){
        document.getElementsByClassName("tw-" + this.third)[0].firstChild.remove();
      }
      while (document.getElementsByClassName("tw-" + this.first)[0].childElementCount > 1){
        document.getElementsByClassName("tw-" + this.third)[0].firstChild.remove();
      }
    }
  }
  ngAfterViewInit() {
    console.log(this.tweetStatus);
    // @ts-ignore
    twttr.widgets.load();
  }
}