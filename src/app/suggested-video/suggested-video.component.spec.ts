import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedVideoComponent } from './suggested-video.component';

describe('SuggestedVideoComponent', () => {
  let component: SuggestedVideoComponent;
  let fixture: ComponentFixture<SuggestedVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
