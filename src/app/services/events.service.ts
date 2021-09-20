import { EventsResponse } from 'src/app/models/EventsResponse';
import { IdResponse } from 'src/app/models/IdResponse';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EventsService {
  constructor(private http: HttpClient) {}

  calendarPost() {
    let params = new HttpParams().set("url", "https://calendar.time.ly/6a37fb6n");
    return this.http.post<IdResponse>("https://timelyapp.time.ly/api/calendars/info", params);
  }

  calendarGet(event_id: number) {
    return this.http.get<EventsResponse>("https://timelyapp.time.ly/api/calendars/" + event_id + "/events");
  }
}
