import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasNoTask } from "../../../components/has-no-task/has-no-task";
import { TaskItem } from '../../../components/task-item/task-item';
import Mock from '../../../../../public/mock.json';

@Component({
  selector: 'app-completed',
  imports: [CommonModule, HasNoTask, TaskItem],
  templateUrl: './completed.html',
  styleUrl: './completed.scss',
})
export class Completed {
  tasks: any[] = Mock.tasks ?? [];

  verificarStatus(task: any): string {
    const hoje = new Date();
    const dataFinal = new Date(task.endDate);

    if (task.completed) {
      return 'concluido';
    }

    if (dataFinal < hoje) {
      return 'atrasado';
    }

    return 'pendente';
  }
}
