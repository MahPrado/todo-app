import { Component } from '@angular/core';
import { HasNoTask } from "../../../components/has-no-task/has-no-task";

@Component({
  selector: 'app-completed',
  imports: [HasNoTask],
  templateUrl: './completed.html',
  styleUrl: './completed.scss',
})
export class Completed {}
