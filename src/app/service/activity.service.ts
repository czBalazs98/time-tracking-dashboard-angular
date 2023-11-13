import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Activity} from "../model/activity";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getActivities(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>('/assets/data.json');
  }
}
