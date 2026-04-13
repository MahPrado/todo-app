import { Component } from '@angular/core';
import { ButtonCreate } from "./button-create/button-create";

@Component({
  selector: 'app-upcoming',
  imports: [ ButtonCreate],
  templateUrl: './upcoming.html',
  styleUrl: './upcoming.scss',
})
export class Upcoming {}
