import {Component, OnInit, Input, Output} from '@angular/core';
import {Event} from './../models/event';
import {EventService} from "../services/event.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event: Event;
  events: Event[];
  constructor(private eventService: EventService) { }

  getEventsFromServices(): void {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }

  ngOnInit(): void {
    this.getEventsFromServices();
  }

}
