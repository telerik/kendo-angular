import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChunkSettings, KENDO_UPLOADS } from '@progress/kendo-angular-upload';
import {
    KENDO_GRID,
    AddEvent,
    CancelEvent,
    DataStateChangeEvent,
    EditEvent,
    GridComponent,
    GridDataResult,
    RemoveEvent,
    SaveEvent,
} from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';
import { ProductService } from './products.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, KENDO_GRID, KENDO_UPLOADS],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    public chunkSettings: ChunkSettings = {
        size: 1048576,
    };
    public gridData!: GridDataResult;
    public productService = inject(ProductService);
    public editedRowIndex: number | undefined = undefined;
    public formGroup?: FormGroup;
    public state: State = {
        skip: 0,
        take: 5,
        filter: { filters: [], logic: 'or' },
        group: [],
        sort: [],
    };

    ngOnInit(): void {
        this.getProducts(this.state);
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.getProducts(state);
    }

    public addHandler(addEvent: AddEvent): void {
        this.closeEditor(addEvent.sender);

        this.formGroup = new FormGroup({
            productID: new FormControl(null, Validators.required),
            productName: new FormControl(null, Validators.required),
            unitPrice: new FormControl(null, [
                Validators.required,
                Validators.min(0),
            ]),
        });

        addEvent.sender.addRow(this.formGroup);
    }

    public editHandler(editEvent: EditEvent): void {
        this.closeEditor(editEvent.sender);

        const { productID, productName, unitPrice } = editEvent.dataItem;

        this.formGroup = new FormGroup({
            productID: new FormControl(productID),
            productName: new FormControl(productName),
            unitPrice: new FormControl(unitPrice),
        });

        this.editedRowIndex = editEvent.rowIndex;
        editEvent.sender.editRow(editEvent.rowIndex, this.formGroup);
    }

    public cancelHandler(cancelEvent: CancelEvent): void {
        this.closeEditor(cancelEvent.sender, cancelEvent.rowIndex);
    }

    public saveHandler(saveEvent: SaveEvent): void {
        const product = saveEvent.formGroup.value;
        if (saveEvent.isNew) {
            this.productService.createProduct(product).subscribe({
                next: () => this.getProducts(this.state),
                error: (error) => console.error(error),
            });
        } else {
            const productId = saveEvent.dataItem.productID;
            this.productService.updateProduct(productId, product).subscribe({
                next: () => this.getProducts(this.state),
                error: (error) => console.error(error),
            });
        }
        saveEvent.sender.closeRow(saveEvent.rowIndex);
    }

    public removeHandler(removeEvent: RemoveEvent): void {
        this.productService
            .deleteProduct(removeEvent.dataItem.productID)
            .subscribe({
                next: () => this.getProducts(this.state),
                error: (error) => console.error(error),
            });
    }

    private closeEditor(
        grid: GridComponent,
        rowIndex: number | undefined = this.editedRowIndex
    ): void {
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    }

    private getProducts(state: State): void {
        this.productService.getProducts(state).subscribe({
            next: (result) => {
                this.gridData = result;

                console.log(result);
            },
            error: (error) => console.error(error),
        });
    }
}
