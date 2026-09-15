import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { employees } from '../../../resources/employees';
import { images } from '../../../resources/images';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-card-component',
    templateUrl: './card.component.html',
    imports: [KENDO_LAYOUT, KENDO_BUTTONS, CommonModule]
})
export class CardComponent {
    @Output() public toggleEvents: EventEmitter<Employee> = new EventEmitter();

    public cards: Employee[] = employees.slice(1, 6);
    public images = images;

    ngOnInit(){
        this.cards.map(card=>card.selected = false)
    }

    public onCardClick(card: Employee): void {
        const currentEmployee: Employee = <Employee>this.cards.find((employee) => employee.id === card.id);
        currentEmployee.selected = !currentEmployee.selected;
        this.toggleEvents.emit(card);
    }

    public fetchAvatar(card: Employee): string {
        const imgURL: string = `${card.imgId}${card.gender}`;
        const image: string = this.images[imgURL];
        return image.startsWith('url(') ? image.slice(5, -2) : image;
    }
}
