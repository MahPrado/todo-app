import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Mock from '../../../../public/mock.json';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.html',
  styleUrls: ['./task-item.scss']
})
export class TaskItem {
  @Input() task: any = Mock.tasks[0];
  @Input() selected = false;

  constructor(private router: Router) {}

  toggleSelection(): void {
    this.selected = !this.selected;
  }

  concluirTarefa(): void {
    this.task.completed = true;
    this.task.status = 'concluido';
    this.router.navigate(['/completed']);
  }

  alterarStatus(): void {
    const rota = this.task.completed ? '/completed' : '/upcoming';
    this.router.navigate([rota]);
  }
} 