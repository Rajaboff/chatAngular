import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.scss'],
})
export class ChatRoomsComponent implements OnInit {

  count$!: Observable<number>;

  constructor() {
  }

  ngOnInit(): void {}
}
