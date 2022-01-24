import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Daily Task';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private _uiService: UiService, private router: Router) {
    this.subscription = this._uiService
      .onToggle()
      .subscribe((value: boolean) => {
        this.showAddTask = value;
      });
  }

  ngOnInit(): void {}

  toggleAddTask(): void {
    this._uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
