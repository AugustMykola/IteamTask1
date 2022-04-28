import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserassessmentsComponent } from './userassessments.component';

describe('UserassessmentsComponent', () => {
  let component: UserassessmentsComponent;
  let fixture: ComponentFixture<UserassessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserassessmentsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserassessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
