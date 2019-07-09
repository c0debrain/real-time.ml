import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';

import { MarketPrice } from '../market-price';

@Component({
  selector: 'app-market-chart',
  templateUrl: './market-chart.component.html',
  styleUrls: ['./market-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketChartComponent implements OnChanges {
  @ViewChild('chart', { static: false })
  chartElement: ElementRef;

  parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");

  @Input()
  marketStatus: MarketPrice[];

  private svgElement: HTMLElement;
  private chartProps: any;

  constructor() { }


  ngOnChanges() {
    if (this.marketStatus && this.chartProps) {
      this.updateChart();
    } else if (this.marketStatus) {
      this.buildChart();
    }
  }
  updateChart() {
    let _this = this;
    this.formatDate();

    // Scale the range of the data again
    this.chartProps.x.domain(d3.extent(this.marketStatus, function (d) {
      if (d.date instanceof Date) {
        return d.date.getTime();
      }
    }));

    this.chartProps.y.domain([0, d3.max(this.marketStatus, function (d) { return Math.max(d.close, d.open); })]);

    // Select the section we want to apply our changes to
    this.chartProps.svg.transition();

    // Make the changes to the line chart
    this.chartProps.svg.select('.line.line1') // update the line
      .attr('d', this.chartProps.valueline(this.marketStatus));

    this.chartProps.svg.select('.x.axis') // update x axis
      .call(this.chartProps.xAxis);

    this.chartProps.svg.select('.y.axis') // update y axis
      .call(this.chartProps.yAxis);
  }
  buildChart() {
    this.chartProps = {};
    this.formatDate();

    // Set the dimensions of the canvas / graph
    var margin = { top: 30, right: 20, bottom: 30, left: 30 },
      width = 500 - margin.left - margin.right,
      height = 270 - margin.top - margin.bottom;

    // Set the ranges
    this.chartProps.x = d3.scaleTime().range([0, width]);
    this.chartProps.y = d3.scaleLinear().range([height, 0]);

    // Define the axes
    var xAxis = d3.axisBottom(this.chartProps.x);
    var yAxis = d3.axisLeft(this.chartProps.y).ticks(5);

    let _this = this;

    // Define the line
    var valueline = d3.line<MarketPrice>()
      .x(function (d) {
        if (d.date instanceof Date) {
          return _this.chartProps.x(d.date.getTime());
        }
      })
      .y(function (d) { return _this.chartProps.y(d.close); });

    var svg = d3.select(this.chartElement.nativeElement)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scale the range of the data
    this.chartProps.x.domain(
      d3.extent(_this.marketStatus, function (d) {
        if (d.date instanceof Date)
          return (d.date as Date).getTime();
      }));
    this.chartProps.y.domain([0, d3.max(this.marketStatus, function (d) {
      return Math.max(d.close, d.open);
    })]);

    // Add the valueline path.
    svg.append('path')
      .attr('class', 'line line1')
      .style('stroke', 'black')
      .style('fill', 'none')
      .attr('d', valueline(_this.marketStatus));


    // Add the X Axis
    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);

    // Add the Y Axis
    svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis);

    // Setting the required objects in chartProps so they could be used to update the chart
    this.chartProps.svg = svg;
    this.chartProps.valueline = valueline;
    this.chartProps.xAxis = xAxis;
    this.chartProps.yAxis = yAxis;
  }


  formatDate() {
    this.marketStatus.forEach(ms => {
      if (typeof ms.date === 'string') {
        ms.date = this.parseDate(ms.date);
      }
    });
  }
}