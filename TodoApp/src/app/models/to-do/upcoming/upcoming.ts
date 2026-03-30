import { Component } from '@angular/core';
import { HasNoTask } from "../../../components/has-no-task/has-no-task";

@Component({
  selector: 'app-upcoming',
  imports: [HasNoTask],
  templateUrl: './upcoming.html',
  styleUrl: './upcoming.scss',
})
export class Upcoming {}
