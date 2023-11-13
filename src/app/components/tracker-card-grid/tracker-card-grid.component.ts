import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Activity} from "../../model/activity";
import {ActivityService} from "../../service/activity.service";
import {TrackerCardComponent} from "../tracker-card/tracker-card.component";
import {TimeframeEnum} from "../../model/timeframe";

@Component({
  selector: 'app-tracker-card-grid',
  standalone: true,
  imports: [CommonModule, TrackerCardComponent],
  templateUrl: './tracker-card-grid.component.html',
  styleUrl: './tracker-card-grid.component.scss'
})
export class TrackerCardGridComponent {

  @Input({required: true})
  activeMenu!: TimeframeEnum;

  activities: Activity[] = []

  constructor(private activityService: ActivityService) {
  }

  ngOnInit() {
    this.activityService.getActivities().subscribe(data => this.activities = data);
  }
}
