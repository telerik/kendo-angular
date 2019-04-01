import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({ selector: '[labelClass]' })

export class LabelClass {
    @Input() set labelClass(text: string) {
        const color = this.matchColor(text);
        this.renderer.setElementStyle(this.element.nativeElement, 'backgroundColor', color );
    }

    constructor(private element: ElementRef, private renderer: Renderer) {}

    private matchColor(text: string) {
        const color = this.colors[text.toUpperCase()];
        return color ? color : this.colors.OTHER;
    }
    // tslint:disable-next-line:member-ordering
    private colors = {
        'SEV: LOW' : '#ff9800',
        'SEV: MEDIUM' : '#ff5d2a',
        'SEV: HIGH' : '#d50000',
        'ENHANCEMENT' : '#00c853',
        'FEATURE' : '#2e7d32',
        'OTHER' : '#1ca8dd',
        'PASSED QA' : '#57b45b',
        'BUG' : '#cf3257',
        'NEEDS QA' : '#bc007c',
        'DOCUMENTATION' : '#455a64',
        'DEMO' : '#673ab7',
        'DELETED' : '#f44336',
        'IN PROGRESS' : '#ffd600'
    };
}
