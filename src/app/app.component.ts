import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public lineChartData: ChartDataSets[] = 
[{
	"data": ["694", "375", "986", "614", "3588", "511", "1069", "503", "319", "904", "747", "3352", "717", "789", "635", "499", "801", "783", "4120", "871", "818", "393", "960", "769", "649", "3736", "665", "834", "401", "979", "784"],
	"label": "Forecast",
	"fill": false,
	"borderColor": "#0065FF",
	"pointBackgroundColor": "#0065FF",
	"pointBorderColor": "#0065FF",
	"backgroundColor": "#0065FF",
	"pointRadius": 0
}, {
	"data": ["843", "754", "74", "2963", "940", "211", "399", "1762", "730", "229", "1800", "407", "625", "200"],
	"label": "Actual",
	"fill": false,
	"borderColor": "#D6B936",
	"pointBackgroundColor": "#D6B936",
	"pointBorderColor": "#D6B936",
	"backgroundColor": "#D6B936",
	"pointRadius": 0
}]
public lineChartLabels: Label[] = ["May-17","May-18","May-19"];
change(val) {
  if(val === 'double'){
this.lineChartData = this.lineChartData.map(l => {
    l.data = l.data.map(d => d*2);
    return l;
    })
    this.lineChartLabels.push("apr2")
  } else {
    this.lineChartData = this.lineChartData.map(l => {
    l.data = l.data.map(d => d/2);
    return l;
    })
  }
  
}
  
  public lineChartOptions: (ChartOptions & { annotation: any }) = {"responsive":true,"maintainAspectRatio":true,"elements":{"line":{"tension":0}},"legend":{"display":true,"position":"bottom","labels":{"fontColor":"black","boxWidth":12,"usePointStyle":false,"fontSize":10}},"scales":{"xAxes":[{"gridLines":{"display":false,"drawBorder":false},"ticks":{"autoSkip":true,"maxRotation":0,"minRotation":0,"source":"auto","maxTicksLimit":13,"fontFamily":"'Noto Sans', sans-serif","fontColor":"black","fontSize":12,"padding":15,"fontStyle":"normal"}}],"yAxes":[{"position":"left","gridLines":{"display":true,"drawBorder":true},"ticks":{"source":"labels","fontFamily":"'Noto Sans', sans-serif","fontColor":"black","fontSize":13,"fontStyle":"normal","padding":25,"beginAtZero":true}}]},"plugins":{"datalabels":{"display":false}},"tooltips":{"mode":"index","intersect":false,"enabled":false,"position":"average"}}
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
    {
      borderColor: 'green',
      backgroundColor: 'rgba(222,22,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }
}
