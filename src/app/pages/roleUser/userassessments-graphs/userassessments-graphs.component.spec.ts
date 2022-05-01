import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserassessmentsGraphsComponent } from './userassessments-graphs.component';

describe('UserassessmentsGraphsComponent', () => {
  let component: UserassessmentsGraphsComponent;
  let fixture: ComponentFixture<UserassessmentsGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserassessmentsGraphsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserassessmentsGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
