import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-model',
  templateUrl: './message-model.component.html',
  styleUrls: ['./message-model.component.sass']
})
export class MessageModelComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
