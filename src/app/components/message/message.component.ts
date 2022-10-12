import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from 'src/app/interfaces/chat.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: IMessage | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
