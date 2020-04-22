import { Component } from '@angular/core';
 
@Component({
  selector: 'radar',
  templateUrl: './radar.html'
})
export class RadarChartComponent {
  // Radar
  public demoradarChartLabels:string[] = ['Designer', 'Developer', 'Tester', 'Clients', 'HR'];
 
  public demoradarChartData:any = [
    {data: [20, 40, 15, 30, 12], label: 'Company A'},
    {data: [30, 40, 20, 35, 15], label: 'Company B'}
  ];
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}