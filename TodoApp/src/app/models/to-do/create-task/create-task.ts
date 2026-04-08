import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.html',
  styleUrls: ['./create-task.scss']
})
export class CreateTask {

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  task = {
    title: '',
    description: ''
  };

  closeModal() {
    this.close.emit();
  }

  createTask() {
    this.save.emit(this.task);

    this.task = { title: '', description: '' };
    this.closeModal();
  }
}