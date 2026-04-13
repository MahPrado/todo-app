import { Component } from '@angular/core';

@Component({
  selector: 'app-sucess-task',
  imports: [],
  templateUrl: './sucess-task.html',
  styleUrl: './sucess-task.scss',
})
export class SucessTask {

  message = 'Successfully created task!';

  closeModal() {

    console.log('Modal closed');
  }
}
