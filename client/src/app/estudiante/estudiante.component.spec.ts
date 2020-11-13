import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EstudianteComponent } from './estudiante.component';

describe('EstudianteComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        EstudianteComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EstudianteComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'estudiante'`, () => {
    const fixture = TestBed.createComponent(EstudianteComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('estudiante');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EstudianteComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('estudiante app is running!');
  });
});
