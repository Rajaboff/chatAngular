import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IMessage, IRoom } from 'src/app/interfaces/chat.interface';
import { RoomService } from './room.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  static uid: string = "";

  constructor(private roomService: RoomService) { }

  set roomUID(uid: string) {
    ChatService.uid = uid;
  }

  get roomUID(): string {
    return ChatService.uid;
  }

  getMessages(): Observable<IMessage[]> {
    return this.roomService.activeRoom.pipe(map((room: IRoom): IMessage[] => room.messages))
  }

}
