import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventComponent} from "./event/event.component";
import {EmailComponent} from "./email/email.component"


const routes: Routes = [
  {path:'', redirectTo: '/events', pathMatch:'full'},
  {path: 'events', component:EventComponent},
  {path: 'events/:id', component:EmailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
