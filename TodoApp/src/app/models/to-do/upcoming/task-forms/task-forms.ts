import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './task-forms.html',
  styleUrls: ['./task-forms.scss']
})

export class TaskForms {

  @Output() creaTask = new EventEmitter<any>();

  @Input() FormTitle: string = 'Create a Task';
  @Input() FormBtnTxt: string = 'Create Task';

  private formBuilder = inject(FormBuilder);

  taskForm = this.formBuilder.group({
    title: [''],
    startDate: [''],
    endDate:['']
  });

  submitForm() {

    const novaTarefa = {
      title: this.taskForm.value.title,
      startDate: this.taskForm.value.startDate,
      endDate: this.taskForm.value.endDate
    };

    console.log(novaTarefa);

    this.creaTask.emit(novaTarefa);

    this.taskForm.reset();
  }
}
