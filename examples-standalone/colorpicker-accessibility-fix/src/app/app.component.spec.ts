import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { EditorModule } from '@progress/kendo-angular-editor';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, InputsModule, EditorModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the correct title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ColorPicker ARIA Accessibility Fix');
  });

  it('should render accessibility fix title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('ColorPicker ARIA Accessibility Fix');
  });

  it('should initialize with default color', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.selectedColor).toEqual('#ff0000');
  });

  it('should handle color change', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const newColor = '#00ff00';
    
    app.onColorChange(newColor);
    
    expect(app.selectedColor).toEqual(newColor);
  });

  it('should render ColorPicker components', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const colorPickers = compiled.querySelectorAll('kendo-colorpicker');
    expect(colorPickers.length).toBeGreaterThan(0);
  });

  it('should render accessibility guidelines section', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const guidelinesSection = compiled.querySelector('.example-section:nth-of-type(3)');
    expect(guidelinesSection?.textContent).toContain('Accessibility Guidelines');
  });

  it('should have proper issue description', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const issueDescription = compiled.querySelector('.issue-description');
    expect(issueDescription?.textContent).toContain('aria-readonly');
    expect(issueDescription?.textContent).toContain('k-colorgradient');
  });
});
