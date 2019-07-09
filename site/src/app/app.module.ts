import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketChartComponent } from './market-chart/market-chart.component';
import { TweetEmbedComponent } from './tweet-embed/tweet-embed.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketChartComponent,
    TweetEmbedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
