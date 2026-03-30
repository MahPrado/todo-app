import { Component } from '@angular/core';
import { HasNoTask } from "../../../components/has-no-task/has-no-task";

@Component({
  selector: 'app-behind-schedule',
  imports: [HasNoTask],
  templateUrl: './behind-schedule.html',
  styleUrl: './behind-schedule.scss',
})
export class BehindSchedule {}
