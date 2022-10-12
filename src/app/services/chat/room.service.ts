import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { IRoom } from 'src/app/interfaces/chat.interface';
import { URL } from 'src/app/utils/env';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: ReplaySubject<IRoom[]> = new ReplaySubject<IRoom[]>(10);
  activeRoom: Subject<IRoom> = new Subject<IRoom>();

  constructor(private httpClient: HttpClient) { }

  getAllRooms(): Observable<IRoom[]> {
    return this.httpClient.get<IRoom[]>('/assets/data.json');
  }

  getActiveRoom(): Observable<IRoom> {
    return this.activeRoom.asObservable();
  }
}
