import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorviewComponent } from './norview.component';

describe('NorviewComponent', () => {
  let component: NorviewComponent;
  let fixture: ComponentFixture<NorviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NorviewComponent]
    });
    fixture = TestBed.createComponent(NorviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
