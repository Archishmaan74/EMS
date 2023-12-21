import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditempComponent } from './editemp.component';

describe('EditempComponent', () => {
  let component: EditempComponent;
  let fixture: ComponentFixture<EditempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditempComponent]
    });
    fixture = TestBed.createComponent(EditempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
