import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCreate } from "./button-create/button-create";
import { TaskForms } from "./task-forms/task-forms";
import { SucessTask } from "./sucess-task/sucess-task";
import { TaskItem } from "../../../components/task-item/task-item";

@Component({
  selector: 'app-upcoming',
  imports: [CommonModule, ButtonCreate, TaskForms, SucessTask, TaskItem],
  templateUrl: './upcoming.html',
  styleUrl: './upcoming.scss',
})
export class Upcoming{

  showForm = false;
  toggleForm() {
    this.showForm = !this.showForm;
  }

  openTaskForm() {
    this.toggleForm();
}

  creaTask = false;
  toggleSucess() {
    this.creaTask = !this.creaTask;
  }

  submitForm() {
    this.toggleSucess();
    this.showForm = false;
}

  sucessModal = false;
  toggleSuc() {
    this.sucessModal = !this.sucessModal;
  }

  closeModal() {
    this.toggleSuc();
    this.creaTask = false;
}

lisTasks: any[] = [
  //{ id: 1, title: 'Mock Task', startDate: '2024-07-01', endDate: '2024-06-01', completed: false },
  //{ id: 2, title: 'Mock Task', startDate: '2024-08-01', endDate: '2024-06-01', completed: false },
  //{ id: 3, title: 'Mock Task', startDate: '2024-05-01', endDate: '2024-04-01', completed: true }
];

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
