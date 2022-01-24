import { Task } from 'src/app/Task';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this._taskService.getTask().subscribe((task) => {
      this.tasks = task;
    });
  }

  deleteTask(task: Task): void {
    this._taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this._taskService.updateTask(task).subscribe(() => {});
  }

  addTask(task: Task): void {
    this._taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }
}
