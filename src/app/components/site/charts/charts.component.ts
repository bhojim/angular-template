import { Component, OnInit } from '@angular/core';
import { SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor() { }
  lineChartOptions = {
    responsive: true
  };

  lineChartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  lineChartLabels = ['January', 'February', 'Mars', 'April'];

  barChartLabels = ['First', 'Second', 'Third'];

  barChartData = [
    {
        label: 'Data Set 1',
        backgroundColor: [
            'rgba(51, 179, 90, 0.6)',
            'rgba(51, 179, 90, 0.6)',
            'rgba(51, 179, 90, 0.6)',
            'rgba(51, 179, 90, 0.6)',
            'rgba(51, 179, 90, 0.6)',
            'rgba(51, 179, 90, 0.6)',
            'rgba(51, 179, 90, 0.6)'
        ],
        borderColor: [
            'rgba(51, 179, 90, 1)',
            'rgba(51, 179, 90, 1)',
            'rgba(51, 179, 90, 1)',
            'rgba(51, 179, 90, 1)',
            'rgba(51, 179, 90, 1)',
            'rgba(51, 179, 90, 1)',
            'rgba(51, 179, 90, 1)'
        ],
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
        label: 'Data Set 2',
        backgroundColor: [
            'rgba(203, 203, 203, 0.6)',
            'rgba(203, 203, 203, 0.6)',
            'rgba(203, 203, 203, 0.6)',
            'rgba(203, 203, 203, 0.6)',
            'rgba(203, 203, 203, 0.6)',
            'rgba(203, 203, 203, 0.6)',
            'rgba(203, 203, 203, 0.6)'
        ],
        borderColor: [
            'rgba(203, 203, 203, 1)',
            'rgba(203, 203, 203, 1)',
            'rgba(203, 203, 203, 1)',
            'rgba(203, 203, 203, 1)',
            'rgba(203, 203, 203, 1)',
            'rgba(203, 203, 203, 1)',
            'rgba(203, 203, 203, 1)'
        ],
        borderWidth: 1,
        data: [35, 40, 60, 47, 88, 27, 30],
    }
];

barChartOptions = {
  responsive: true
};

pieChartData = [
  {
      data: [300, 50, 100],
      borderWidth: [1, 1, 1],
      backgroundColor: [
          'rgba(75,192,192,1)',
          '#FFCE56'
      ],
      hoverBackgroundColor: [
          'rgba(75,192,192,1)',
          '#FFCE56'
      ]
  }];

pieChartLabels = ['First', 'Second', 'Third'];

pieChartOptions = {
  responsive: true
};

polarChartData = [{
  data: [11, 16, 7],
  backgroundColor: [
      'rgba(51, 179, 90, 1)',
      '#FF6384',
      '#FFCE56'
  ],
  label: 'My dataset' // for legend
}];

polarChartLabels = ['First', 'Second', 'Third'];

polarChartOptions = {
  responsive: true
};

radarChartData =  [
  {
      label: 'Series A',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderWidth: 2,
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55]
  },
  {
      label: 'Series B',
      backgroundColor: 'rgba(51, 179, 90, 0.2)',
      borderWidth: 2,
      borderColor: 'rgba(51, 179, 90, 1)',
      pointBackgroundColor: 'rgba(51, 179, 90, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(51, 179, 90, 1)',
      data: [28, 48, 40, 19, 96, 27]
  }
];

radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling'];

radarChartOptions = {
  responsive: true
};


  ngOnInit() {
  }

}
