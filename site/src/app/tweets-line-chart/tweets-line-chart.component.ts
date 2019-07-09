import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { multi} from './data';
import { MarketPrice } from '../market-price';

@Component({
  selector: 'app-tweets-line-chart',
  templateUrl: './tweets-line-chart.component.html',
  styleUrls: ['./tweets-line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetsLineChartComponent {
  @Input()
  marketStatus: MarketPrice[];

  single: any[];
  multi: any[];

  ngOnChanges() {
    if (this.marketStatus) { // Variable undefined on first ngOnChanges call
      this.updateChart();
    }
  }
  
  updateChart() {
    let now = new Date(this.marketStatus[0].date);
    this.multi[0].series.push({
      "name": now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
      "value": this.marketStatus[0].close
    });
    if (multi[0].series.length > 50) {
      multi[0].series.shift();
    }
    console.log(multi[0].series.length);
    console.log("Multi");
    console.log(multi);
    this.multi = [...this.multi]
  }
  // options
  animations = false;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Tweets';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor() {
    Object.assign(this, { multi})   
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}
