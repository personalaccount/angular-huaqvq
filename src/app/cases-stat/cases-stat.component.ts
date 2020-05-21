import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ApiService } from '../api.service';
import { Statistic } from '../statistic';

@Component({
  selector: 'app-cases-stat',
  templateUrl: './cases-stat.component.html',
  styleUrls: ['./cases-stat.component.css']
})
export class CasesStatComponent implements OnInit {
  stats: Statistic[] = [];
  label = 'Positive';
  isLoadingResults = true;
  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [], backgroundColor: [], label: this.label }
  ];

  constructor(private api: ApiService) {}

  getStatistic(status: string) {
    this.barChartLabels = [];
    this.barChartData = [
      {
        data: [],
        backgroundColor: [],
        label: this.label
      }
    ];

    this.api.getStatistic(status).subscribe(
      (result: any) => {
        this.stats = result;

        const chartData: number[] = [];
        const chartColor: string[] = [];

        this.stats.forEach(stat => {
          this.barChartLabels.push(stat.id.date);
          chartData.push(stat.count);
          if (this.label === 'Positive') {
            chartColor.push('rgba(255, 165, 0, 0.5)');
          } else if (this.label === 'Dead') {
            chartColor.push('rgba(255, 0, 0, 0.5)');
          } else {
            chartColor.push('rgb(35,169,60)');
          }
        });

        this.barChartData = [
          {
            data: chartData,
            backgroundColor: chartColor,
            label: this.label
          }
        ];
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

  ngOnInit(): void {
    this.getStatistic(this.label);
  }
}
