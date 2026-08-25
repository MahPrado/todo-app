import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasNoTask } from "../../../components/has-no-task/has-no-task";

@Component({
  selector: 'app-completed',
  imports: [CommonModule, HasNoTask],
  templateUrl: './completed.html',
  styleUrl: './completed.scss',
})
export class Completed { 
  @Input() tasks: any[] = [];

  verificarStatus(task: any): string {
    // Reutilize aqui a implementação existente no componente principal
    return task.status;
  }}
