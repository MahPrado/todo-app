import { Component, Input } from '@angular/core';
import  Mock from '../../../../public/mock.json';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.html',
  styleUrls: ['./task-item.scss']
})

export class TaskItem {

@Input() task: any = Mock.tasks[0];

 
} 