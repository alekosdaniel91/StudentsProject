import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStudentsComponent } from './data-students.component';

describe('DataStudentsComponent', () => {
  let component: DataStudentsComponent;
  let fixture: ComponentFixture<DataStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
