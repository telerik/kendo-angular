import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { teams } from 'src/app/data/teams';
import { employees } from 'src/app/data/employees';
import { images } from 'src/app/data/images';
import { Employee } from 'src/app/models/employee.model';
import { Team } from 'src/app/models/team.model';

@Component({
    selector: 'card-component',
    templateUrl: './card.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./card.styles.scss']
})
export class CardComponent {
    @Output() public toggleEvents: EventEmitter<Employee> = new EventEmitter();

    public cards: Employee[] = employees.slice(1, 6);

    public images = images;

    public setCardColor(card: Employee): string {
        const team = teams.find((team: Team) => team.teamID === card.teamId);
        return team.teamColor;
    }

    public onCardClick(card: Employee): void {
        const employee = this.cards.find((employee) => employee.id === card.id);
        employee.selected = !employee.selected;
        this.toggleEvents.emit(card);
    }

    public fetchAvatar(card: Employee): string {
        const imgURL = `${card.imgId}${card.gender}`;
        return this.images[imgURL];
    }
}
