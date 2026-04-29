import { Component } from '@angular/core';
import { ButtonCreate } from "./button-create/button-create";
import { TaskForms } from "./task-forms/task-forms";
import { SucessTask } from "./sucess-task/sucess-task";


@Component({
  selector: 'app-upcoming',
  imports: [ButtonCreate, TaskForms, SucessTask],
  templateUrl: './upcoming.html',
  styleUrl: './upcoming.scss',
})
export class Upcoming {

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

}
