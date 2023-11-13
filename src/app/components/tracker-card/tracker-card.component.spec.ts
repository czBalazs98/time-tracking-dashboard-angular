import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TrackerCardComponent} from './tracker-card.component';

describe('TrackerCardComponent', () => {
  let component: TrackerCardComponent;
  let fixture: ComponentFixture<TrackerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackerCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TrackerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
