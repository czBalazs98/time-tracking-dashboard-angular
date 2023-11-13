import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from "./components/common/footer/footer.component";
import {TrackerCardComponent} from "./components/tracker-card/tracker-card.component";
import {TrackerCardGridComponent} from "./components/tracker-card-grid/tracker-card-grid.component";
import {TimeTrackerComponent} from "./components/time-tracker/time-tracker.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, TrackerCardComponent, TrackerCardGridComponent, TimeTrackerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-tracking-dashboard-angular';
}
