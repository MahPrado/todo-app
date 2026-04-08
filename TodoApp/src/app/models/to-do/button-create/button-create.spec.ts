import { Component } from '@angular/core';

@Component({
  selector: 'app-button-create',
  templateUrl: './button-create.html',
  styleUrls: ['./button-create.scss']
})
export class ButtonCreateComponent {

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