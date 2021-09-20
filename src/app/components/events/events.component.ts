import { Component, OnInit, Input } from "@angular/core";
import { Events } from "src/app/models/Events";
import { EventsResponse } from "src/app/models/EventsResponse";
import { EventsService } from "src/app/services/events.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"],
})
export class EventsComponent implements OnInit {

  @Input() event_id: number;

  public eventsList: Events[];

  constructor(private service: EventsService) {}

  ngOnInit() {
    this.service.calendarGet(this.event_id).subscribe( (response: EventsResponse) => {
      this.eventsList = response.data.items;
    });
  }
}
