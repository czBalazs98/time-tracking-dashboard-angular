import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Activity} from "../../model/activity";
import {TimeframeEnum} from "../../model/timeframe";

@Component({
  selector: 'app-tracker-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './tracker-card.component.html',
  styleUrl: './tracker-card.component.scss'
})
export class TrackerCardComponent {

  @Input({required: true})
  activity!: Activity;

  @Input({required: true})
  timeframe!: TimeframeEnum;

  imageSrc!: string;

  bgClassName!: string;

  hours!: number;

  previous!: string;

  ngOnInit() {
    this.loadStyles();
  }

  ngOnChanges() {
    this.loadData();
  }

  loadData() {
    let prevHours: number = 0;
    let prevType: string = '';
    switch (this.timeframe) {
      case TimeframeEnum.Daily:
        this.hours = this.activity.timeframes.daily.current;
        prevHours = this.activity.timeframes.daily.previous;
        prevType = 'day';
        break;
      case TimeframeEnum.Weekly:
        this.hours = this.activity.timeframes.weekly.current;
        prevHours = this.activity.timeframes.weekly.previous;
        prevType = 'week';
        break;
      case TimeframeEnum.Monthly:
        this.hours = this.activity.timeframes.monthly.current;
        prevHours = this.activity.timeframes.monthly.previous;
        prevType = 'month';
    }
    this.previous = `Last ${prevType} - ${prevHours}hrs`;
  }

  loadStyles() {
    const imagesUrl = '/assets/images/';
    switch (this.activity.title) {
      case 'Work':
        this.imageSrc = imagesUrl + 'icon-work.svg';
        this.bgClassName = 'bg-light-red';
        break;
      case 'Play':
        this.imageSrc = imagesUrl + 'icon-play.svg';
        this.bgClassName = 'bg-soft-blue';
        break;
      case 'Study':
        this.imageSrc = imagesUrl + 'icon-study.svg';
        this.bgClassName = 'bg-light-red-study';
        break;
      case 'Exercise':
        this.imageSrc = imagesUrl + 'icon-exercise.svg';
        this.bgClassName = 'bg-lime-green';
        break;
      case 'Social':
        this.imageSrc = imagesUrl + 'icon-social.svg';
        this.bgClassName = 'bg-violet';
        break;
      case 'Self Care':
        this.imageSrc = imagesUrl + 'icon-self-care.svg';
        this.bgClassName = 'bg-soft-orange';
        break;
      default:
        this.imageSrc = '';
    }
  }

}
