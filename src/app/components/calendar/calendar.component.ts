import { Component, OnInit } from "@angular/core";
import { IdResponse } from "src/app/models/IdResponse";
import { EventsService } from "src/app/services/events.service";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit {

  public calendar_id: number;

  constructor(private service: EventsService) {}

  ngOnInit() {
    this.service.calendarPost().subscribe((return_subscribe: IdResponse) => {
      this.calendar_id = return_subscribe.data.id;
    });
  }
}
