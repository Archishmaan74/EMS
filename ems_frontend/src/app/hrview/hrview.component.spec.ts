import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrviewComponent } from './hrview.component';

describe('HrviewComponent', () => {
  let component: HrviewComponent;
  let fixture: ComponentFixture<HrviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrviewComponent]
    });
    fixture = TestBed.createComponent(HrviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
