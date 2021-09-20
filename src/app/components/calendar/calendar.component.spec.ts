import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CalendarComponent } from "./calendar.component";
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from "../events/events.component";

describe("CalendarComponent", () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalendarComponent,
        EventsComponent
      ],
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
