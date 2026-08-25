import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasNoTask } from "../../../components/has-no-task/has-no-task";

@Component({
  selector: 'app-behind-schedule',
  imports: [CommonModule, HasNoTask],
  templateUrl: './behind-schedule.html',
  styleUrl: './behind-schedule.scss',
})
export class BehindSchedule {
    @Input() tasks: any[] = [];

  verificarStatus(task: any): string {
    // Reutilize aqui a implementação existente no componente principal
    return task.status;
  }
}
