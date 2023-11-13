import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrackerCardGridComponent} from "../tracker-card-grid/tracker-card-grid.component";
import {MenuComponent} from "../menu/menu.component";
import {TimeframeEnum} from "../../model/timeframe";

@Component({
  selector: 'app-time-tracker',
  standalone: true,
  imports: [CommonModule, TrackerCardGridComponent, MenuComponent],
  templateUrl: './time-tracker.component.html',
  styleUrl: './time-tracker.component.scss'
})
export class TimeTrackerComponent {

  activeMenu!: TimeframeEnum;

  setActiveMenu(activeMenu: TimeframeEnum) {
    this.activeMenu = activeMenu;
  }
}
