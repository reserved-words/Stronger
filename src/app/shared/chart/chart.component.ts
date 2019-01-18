import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'gym-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {

  @Input() title: string;
  @Input() dates: Date[];
  @Input() values: number[];
  
  chart: Chart;

  ngOnInit() {
    var data = <any>[];

    for (var i = this.dates.length-1; i >= 0; i--){
      data.push({ x: new Date(this.dates[i]), y: 0.453592 * this.values[i] });
    }
console.log(JSON.stringify(data));
    this.chart = new Chart({
      chart: {
        type: 'spline'
      },
      title: {
        text: this.title
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'kg'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          connectNulls: true
        }
      },
      series: [
        {
          name: 'Weight',
          type: 'line',
          data: data
      }]
    });
  }

  ngOnChanges(){
    this.ngOnInit();
  }
}