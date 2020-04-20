import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentActivityComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
