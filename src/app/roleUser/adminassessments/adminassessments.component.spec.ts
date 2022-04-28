import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminassessmentsComponent } from './adminassessments.component';

describe('AdminassessmentsComponent', () => {
  let component: AdminassessmentsComponent;
  let fixture: ComponentFixture<AdminassessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminassessmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminassessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
