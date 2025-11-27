import { Component, inject, signal } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChunkSettings, KENDO_UPLOADS } from '@progress/kendo-angular-upload';
import {
    KENDO_GRID,
    AddEvent,
    CancelEvent,
    DataStateChangeEvent,
    EditEvent,
    GridComponent,
    RemoveEvent,
    SaveEvent,
} from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';
import { ProductService } from './products.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-root',
    imports: [KENDO_GRID, KENDO_UPLOADS],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    public chunkSettings: ChunkSettings = {
        size: 1048576,
    };
    
    private productService = inject(ProductService);
    
    public editedRowIndex = signal<number | undefined>(undefined);
    public formGroup = signal<FormGroup | undefined>(undefined);
    public state = signal<State>({
        skip: 0,
        take: 5,
        filter: { filters: [], logic: 'or' },
        group: [],
        sort: [],
    });

    private productsResource = rxResource({
        params: () => this.state(),
        stream: ({ params }) => this.productService.getProducts(params)
    });

    public gridData = this.productsResource.value;
    public error = this.productsResource.error;

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state.set(state);
    }

    public addHandler(addEvent: AddEvent): void {
        this.closeEditor(addEvent.sender);

        const form = new FormGroup({
            productID: new FormControl(null, Validators.required),
            productName: new FormControl(null, Validators.required),
            unitPrice: new FormControl(null, [
                Validators.required,
                Validators.min(0),
            ]),
        });
        
        this.formGroup.set(form);
        addEvent.sender.addRow(form);
    }

    public editHandler(editEvent: EditEvent): void {
        this.closeEditor(editEvent.sender);

        const { productID, productName, unitPrice } = editEvent.dataItem;

        const form = new FormGroup({
            productID: new FormControl(productID),
            productName: new FormControl(productName),
            unitPrice: new FormControl(unitPrice),
        });
        
        this.formGroup.set(form);
        this.editedRowIndex.set(editEvent.rowIndex);
        editEvent.sender.editRow(editEvent.rowIndex, form);
    }

    public cancelHandler(cancelEvent: CancelEvent): void {
        this.closeEditor(cancelEvent.sender, cancelEvent.rowIndex);
    }

    public saveHandler(saveEvent: SaveEvent): void {
        const product = saveEvent.formGroup.value;
        if (saveEvent.isNew) {
            this.productService.createProduct(product).subscribe({
                next: () => this.productsResource.reload(),
                error: (error) => console.error(error),
            });
        } else {
            const productId = saveEvent.dataItem.productID;
            this.productService.updateProduct(productId, product).subscribe({
                next: () => this.productsResource.reload(),
                error: (error) => console.error(error),
            });
        }
        saveEvent.sender.closeRow(saveEvent.rowIndex);
    }

    public removeHandler(removeEvent: RemoveEvent): void {
        this.productService
            .deleteProduct(removeEvent.dataItem.productID)
            .subscribe({
                next: () => this.productsResource.reload(),
                error: (error) => console.error(error),
            });
    }

    private closeEditor(
        grid: GridComponent,
        rowIndex: number | undefined = this.editedRowIndex()
    ): void {
        grid.closeRow(rowIndex);
        this.editedRowIndex.set(undefined);
        this.formGroup.set(undefined);
    }
}
