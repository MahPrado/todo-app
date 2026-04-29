
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sucess-task',
  imports: [],
  templateUrl: './sucess-task.html',
  styleUrl: './sucess-task.scss',
})
export class SucessTask {

  @Output() sucessModal = new EventEmitter<void>();

  title = 'Successful'
  message = "You have successfully\ncreated task";

 
  closeModal() {
    console.log('Modal closed');
    this.sucessModal.emit();
  }
}
