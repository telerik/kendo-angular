import { Component } from '@angular/core';
import { KENDO_GRID } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-root',
  imports: [KENDO_GRID],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public gridData: Customer[] = [
    {
      Id: "ALFKI",
      CompanyName: "Alfreds Futterkiste",
      ContactName: "Maria Anders",
      ContactTitle: "Sales Representative",
      City: "Berlin",
    },
    {
      Id: "ANATR",
      CompanyName: "Ana Trujillo Emparedados y helados",
      ContactName: "Ana Trujillo",
      ContactTitle: "Owner",
      City: "México D.F.",
    },
    {
      Id: "ANTON",
      CompanyName: "Antonio Moreno Taquería",
      ContactName: "Antonio Moreno",
      ContactTitle: "Owner",
      City: "México D.F.",
    },
    {
      Id: "AROUT",
      CompanyName: "Around the Horn",
      ContactName: "Thomas Hardy",
      ContactTitle: "Sales Representative",
      City: "London",
    },
    {
      Id: "BERGS",
      CompanyName: "Berglunds snabbköp",
      ContactName: "Christina Berglund",
      ContactTitle: "Order Administrator",
      City: "Luleå",
    }];
}
export interface Customer {
  Id: string;
  CompanyName: string;
  ContactName: string;
  ContactTitle: string;
  City: string;
}