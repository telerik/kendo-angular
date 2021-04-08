import { Component, ViewEncapsulation } from "@angular/core";
import { employees } from "../../data/employees";
import { images } from "../../data/images";
import { teams } from "../../data/teams";

@Component({
  selector: "card-component",
  template: `
    <div class="card-list">
      <div *ngFor="let card of cards">
        <kendo-card style="cursor: pointer" (click)="onCardClick(card)">
          <kendo-card-header class="k-hbox">
            <kendo-avatar
              width="40px"
              height="40px"
              [ngStyle]="{
                'background-image': fetchAvatar(card)
              }"
              [shape]="'circle'"
              class="employee-photo"
            ></kendo-avatar>
            <div>
              <h1 kendoCardTitle [ngStyle]="{ color: employeeColor(card) }">
                {{ card.fullName }}
              </h1>
              <p kendoCardSubtitle>{{ card.jobTitle }}</p>
            </div>
          </kendo-card-header>
        </kendo-card>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .card-list {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
      }
      .employee-photo {
        display: inline-block;
        border-radius: 50%;
        background-size: 38px 41px;
        background-position: center center;
        vertical-align: middle;
        line-height: 32px;
      }
    `
  ]
})
export class CardComponent {
  public teams = teams;
  public cards = employees
    .filter(dataItem => dataItem.jobTitle === "Sales Representative")
    .slice(0, 5);
  public images = images;

  public employeeColor(card) {
    console.log(card);
    const team = this.teams.find(team => team.teamID === card.teamId);
    return team.teamColor;
  }

  onCardClick(e) {
    console.log(e);
  }

  public fetchAvatar(card) {
    const imgURL = `${card.imgId}${card.gender}`;
    return this.images[imgURL];
  }
}
