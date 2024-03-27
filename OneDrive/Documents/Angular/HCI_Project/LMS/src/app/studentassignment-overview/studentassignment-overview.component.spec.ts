import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentassignmentOverviewComponent } from './studentassignment-overview.component';

describe('StudentassignmentOverviewComponent', () => {
  let component: StudentassignmentOverviewComponent;
  let fixture: ComponentFixture<StudentassignmentOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentassignmentOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentassignmentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
