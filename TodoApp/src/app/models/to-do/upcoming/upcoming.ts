import { Component } from '@angular/core';
import { HasNoTask } from "../../../components/has-no-task/has-no-task";
import { ButtonCreate } from "../button-create/button-create";

@Component({
  selector: 'app-upcoming',
  imports: [HasNoTask, ButtonCreate],
  templateUrl: './upcoming.html',
  styleUrl: './upcoming.scss',
})
export class Upcoming {}
