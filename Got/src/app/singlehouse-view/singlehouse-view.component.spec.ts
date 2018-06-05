import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglehouseViewComponent } from './singlehouse-view.component';

describe('SinglehouseViewComponent', () => {
  let component: SinglehouseViewComponent;
  let fixture: ComponentFixture<SinglehouseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglehouseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglehouseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
