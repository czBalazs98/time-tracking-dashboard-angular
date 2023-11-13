import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TrackerCardGridComponent} from './tracker-card-grid.component';

describe('TrackerCardGridComponent', () => {
  let component: TrackerCardGridComponent;
  let fixture: ComponentFixture<TrackerCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackerCardGridComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TrackerCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
