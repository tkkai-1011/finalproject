import { Component, OnInit, Input } from '@angular/core';
import {Event} from './../models/event';
import {}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event: Event;
  events: Event[]
  constructor() { }

  ngOnInit(): void {
  }

}
