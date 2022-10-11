import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IRoom } from 'src/app/interfaces/chat';
import { ChatService } from 'src/app/services/chat/chat.service';
import { RoomService } from 'src/app/services/chat/room.service';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.scss'],
})
export class ChatRoomsComponent implements OnInit {

  roomList = new Subject<IRoom[]>();

  activeRoom: IRoom | undefined;

  constructor(private roomService: RoomService, private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe((rooms: IRoom[]) => {
      this.roomList.next(rooms);
      this.roomService.rooms.next(rooms);
    })

    this.roomService.getActiveRoom().subscribe((room: IRoom) => {
      this.activeRoom = room;
    })
  }

  selectRoom(room: IRoom) {
    this.chatService.roomUID = room.uid;
    this.roomService.activeRoom.next(room);
  }

}
