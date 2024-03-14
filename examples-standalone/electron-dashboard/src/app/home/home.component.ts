import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customers } from '../shared/data/customers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public gridData: unknown[] = customers;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }
}
