import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-model',
  templateUrl: './message-model.component.html',
  styleUrls: ['./message-model.component.sass']
})
export class MessageModelComponent implements OnInit {
  @Input() message: string;
  @Input() autoClose?: boolean;
  @Input() isSuccess?: boolean;
  @Output() closed: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    if(this.autoClose) {
      setTimeout(() => {
        this.closed.emit(true)
      }, 2000);
    }
  }

}
