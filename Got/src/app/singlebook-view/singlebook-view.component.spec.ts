import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglebookViewComponent } from './singlebook-view.component';

describe('SinglebookViewComponent', () => {
  let component: SinglebookViewComponent;
  let fixture: ComponentFixture<SinglebookViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglebookViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglebookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
