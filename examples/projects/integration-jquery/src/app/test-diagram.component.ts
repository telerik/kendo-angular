import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

declare var kendo: any;

@Component({
    selector: 'app-other',
    template: `
        <hr />
        <p>Kendo UI for jQuery Diagram:</p>
        <div #diagram></div>
    `
})
export class TestDiagramComponent implements AfterViewInit, OnDestroy {
    @ViewChild('diagram') diagramEl: ElementRef;

    constructor(private hostEl: ElementRef) {}

    ngAfterViewInit() {
        kendo.jQuery(this.diagramEl.nativeElement).kendoDiagram({
              dataSource: {
                  data: this.diagramNodes(),
                  schema: {
                      model: {
                          children: 'items'
                      }
                  }
              },
              layout: {
                  type: 'tree',
                  subtype: 'up',
                  horizontalSeparation: 30,
                  verticalSeparation: 20
              },
              shapeDefaults: {
                  width: 40,
                  height: 40
              }
        });
    }

    ngOnDestroy(): void {
        kendo.destroy(this.hostEl.nativeElement);
    }

    private diagramNodes() {
        const root = { name: '0', items: [] };
        this.addNodes(root, [3, 2, 2]);
        return [root];
    }

    private addNodes(root, levels) {
        if (levels.length > 0) {
            for (let i = 0; i < levels[0]; i++) {
                const node = { name: '0', items: [] };
                root.items.push(node);

                this.addNodes(node, levels.slice(1));
            }
        }
    }
}

