import { Component, Input, OnInit } from '@angular/core';
import { IMessage, IRoom } from 'src/app/interfaces/chat.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: IMessage | undefined;
  @Input() room: IRoom | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  get roomTitle(): string {
    return this.room?.room || "";
  }

  get roomColor(): string {
    return this.room?.color || "gray";
  }

}
