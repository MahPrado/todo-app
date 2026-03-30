import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-to-do',
  imports: [RouterOutlet, Header],
  templateUrl: './to-do.html',
  styleUrl: './to-do.scss',
})
export class ToDo {}
