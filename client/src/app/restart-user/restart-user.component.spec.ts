import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestartUserComponent } from './restart-user.component';

describe('RestartUserComponent', () => {
  let component: RestartUserComponent;
  let fixture: ComponentFixture<RestartUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestartUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestartUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
