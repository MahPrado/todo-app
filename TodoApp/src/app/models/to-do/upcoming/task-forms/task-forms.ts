import { Component, inject, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task-forms',
  templateUrl: './task-forms.html',
  styleUrls: ['./task-forms.scss']
})

export class TaskForms {
  @Input() FormTitle: string = 'Create a Task';
  @Input() FormBtnTxt: string = 'Create Task';
  taskTitle: string = '';
  taskDate: string = '';

  private formBuilder = inject(FormBuilder);

  taskForm = this.formBuilder.group({
    title: [''],
    startDate: [''],
    endDate:['']
  });

  submitForm() {
    // lógica para criar uma tarefa
    console.log('Task created:', this.taskTitle, this.taskDate);
  }
}
