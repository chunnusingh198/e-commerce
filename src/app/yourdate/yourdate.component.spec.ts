import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourdateComponent } from './yourdate.component';

describe('YourdateComponent', () => {
  let component: YourdateComponent;
  let fixture: ComponentFixture<YourdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
