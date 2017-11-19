import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeSelectComponent } from './mode-select.component';

describe('ModeSelectComponent', () => {
  let component: ModeSelectComponent;
  let fixture: ComponentFixture<ModeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
