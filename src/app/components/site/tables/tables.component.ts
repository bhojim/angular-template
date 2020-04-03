import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  heroes = [
    { id: 1, firstName: 'Taylor', lastName: 'Swift', userName: 'tSwift' },
    { id: 2, firstName: 'Lauren' , lastName: 'Daigle', userName: 'lDaigle'},
    { id: 3, firstName: 'Blake' , lastName: 'Lively', userName: 'BLively'},
    { id: 4, firstName: 'Kate' , lastName: 'Winslet', userName: 'kWinslet' },
    { id: 5, firstName: 'Victoria' , lastName: 'Beckham', userName: 'VBeckham'},
    { id: 6, firstName: 'Kate' , lastName: 'Hudson', userName: 'kHudson'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
