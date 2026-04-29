import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-task-forms',
  templateUrl: './task-forms.html',
  styleUrls: ['./task-forms.scss']
})

export class TaskForms {

  @Output() creaTask = new EventEmitter<void>();

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
    console.log('Task created:', this.taskTitle, this.taskDate);
    this.creaTask.emit();
  }

}
