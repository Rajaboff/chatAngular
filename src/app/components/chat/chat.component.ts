import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IMessage, IRoom } from 'src/app/interfaces/chat.interface';
import { ChatService } from 'src/app/services/chat/chat.service';
import { RoomService } from 'src/app/services/chat/room.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages = new Subject<IMessage[]>();
  room: IRoom | undefined;
  uid: string = "";

  constructor(private chatService: ChatService, private roomService: RoomService) { }

  ngOnInit(): void {
    this.uid = this.chatService.roomUID;

    this.roomService.activeRoom.subscribe((room: IRoom) => {
      this.room = room;
    })

    this.chatService.getMessages().subscribe((messages: IMessage[]) => {
      this.messages.next(messages);
    })
  }

  get roomTitle(): string {
    return this.room?.room || "";
  }

  get roomColor(): string {
    return this.room?.color || "gray";
  }

}
