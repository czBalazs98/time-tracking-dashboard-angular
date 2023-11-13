import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {TimeframeEnum} from "../../model/timeframe";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  menuItems: TimeframeEnum[] = Object.values(TimeframeEnum) as TimeframeEnum[];

  activeMenuItem: TimeframeEnum = this.menuItems[0];

  @Output()
  menuSelectionEvent = new EventEmitter<TimeframeEnum>();

  ngOnInit() {
    this.menuSelectionEvent.emit(this.activeMenuItem);
  }

  selectMenuItem(menuItem: TimeframeEnum) {
    this.activeMenuItem = menuItem;
    this.menuSelectionEvent.emit(this.activeMenuItem);
  }

}
