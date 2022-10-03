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
      icon: '',
      label: '',
      active: true
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
