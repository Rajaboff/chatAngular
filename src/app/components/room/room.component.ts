import { Component, Input, OnInit } from '@angular/core';
import { IRoom } from 'src/app/interfaces/chat.interface';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  @Input() initials: string = "";
  @Input() room: IRoom | undefined;
  @Input() active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get lastMessage(): string {
    return this.room?.messages[this.room.messages.length - 1].content || "";
  }

  get roomTitle(): string {
    return this.room?.room || "";
  }

  get color(): string {
    return this.room?.color || "gray";
  }
}
