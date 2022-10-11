import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { IBar } from 'src/app/interfaces/bars.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  bars: IBar[] = [
    {
      icon: 'question_answer',
      label: 'Все чаты',
      active: true
    },
    {
      icon: 'question_answer',
      label: 'Все чаты',
      active: false
    },
    {
      icon: 'question_answer',
      label: 'Все чаты',
      active: false
    },
  ]

  menuIsOpen: boolean = false;
  menuClass: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.bars, event.previousIndex, event.currentIndex);
  }

}
