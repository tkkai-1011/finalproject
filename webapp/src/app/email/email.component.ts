import {Component, OnInit, OnChanges, Input} from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from "@angular/forms";
import {Event} from "../models/event";
import {EventService} from "../services/event.service";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input() event : Event;

  loading = false;
  buttionText = "Submit";

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  constructor(public http: HttpService,      private route: ActivatedRoute,
              private eventService: EventService) {

  }

  ngOnInit() {
    console.log("yes");
    this.getEventFromRoute();
  }
  getEventFromRoute(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.eventService.getEventFromId(id).subscribe(event => this.event = event);
  }

  register() {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      title: this.event.title,
      description: this.event.description,
      start:this.event.StartTime,
      end:this.event.EndTime,
      location:this.event.location,
      date:this.event.createdDate
    }
    this.http.sendEmail("http://localhost:4000/sendmail", user).subscribe(
      data => {
        let res:any = data;
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );
  }

}
