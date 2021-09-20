import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EventsComponent } from "./events.component";

describe("EventsComponent", () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should check for table header title", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("#title").textContent).toContain("Title");
  });

  it("should check for table header start date", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("#start_date").textContent).toContain("Start Date");
  });

  it("should check for table header description", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("#description").textContent).toContain("Description");
  });

  it("should check for table header image", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("#image").textContent).toContain("Image");
  });
});
