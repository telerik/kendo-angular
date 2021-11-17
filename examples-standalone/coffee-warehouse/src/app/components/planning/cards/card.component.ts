import { Component, EventEmitter, Output } from '@angular/core';
import { teams } from 'src/app/resources/teams';
import { employees } from 'src/app/resources/employees';
import { images } from 'src/app/resources/images';
import { Employee } from 'src/app/models/employee.model';
import { Team } from 'src/app/models/team.model';

@Component({
    selector: 'app-card-component',
    templateUrl: './card.component.html',
})
export class CardComponent {
    @Output() public toggleEvents: EventEmitter<Employee> = new EventEmitter();

    public cards: Employee[] = employees.slice(1, 6);

    public images = images;

    public setCardColor(card: Employee): string | undefined{
        const currentTeam: Team | undefined = teams.find((team: Team) => team.teamID === card.teamId);
        return currentTeam?.teamColor;
    }

    public onCardClick(card: Employee): void {
        const currentEmployee: Employee = <Employee>this.cards.find((employee) => employee.id === card.id);
        currentEmployee.selected = !currentEmployee.selected;
        this.toggleEvents.emit(card);
    }

    public fetchAvatar(card: Employee): string {
        const imgURL: string = `${card.imgId}${card.gender}`;
        return this.images[imgURL];
    }
}
