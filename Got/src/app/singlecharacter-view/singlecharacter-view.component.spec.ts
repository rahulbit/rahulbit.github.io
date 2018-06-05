import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecharacterViewComponent } from './singlecharacter-view.component';

describe('SinglecharacterViewComponent', () => {
  let component: SinglecharacterViewComponent;
  let fixture: ComponentFixture<SinglecharacterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglecharacterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglecharacterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
