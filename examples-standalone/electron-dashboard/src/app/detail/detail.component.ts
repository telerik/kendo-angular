import { Component, OnInit } from '@angular/core';
import { salesByQuarter } from '../shared/data/sales-data';

@Component({
  standalone: false,
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public salesByQuarter = salesByQuarter;
  constructor() {}

  ngOnInit(): void {
    console.log('DetailComponent INIT');
  }
}
