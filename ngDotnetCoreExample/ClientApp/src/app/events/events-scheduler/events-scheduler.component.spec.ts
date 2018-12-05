import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSchedulerComponent } from './events-scheduler.component';

describe('EventsSchedulerComponent', () => {
  let component: EventsSchedulerComponent;
  let fixture: ComponentFixture<EventsSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
