import { Component } from '@angular/core';

@Component({
  selector: 'app-button-create',
  imports: [],
  templateUrl: './button-create.html',
  styleUrl: './button-create.scss',
})

export class ButtonCreate {

  isModalOpen = false;
  tasks: any[] = [];

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  handleCreateTask(task: any) {
    console.log('Recebido do modal:', task);
    this.tasks.push(task);
  }
}