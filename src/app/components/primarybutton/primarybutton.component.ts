import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primarybutton',
  templateUrl: './primarybutton.component.html',
  styleUrls: ['./primarybutton.component.css'],
})
export class PrimarybuttonComponent implements OnInit {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickButton(): void {
    this.btnClick.emit();
  }
}
