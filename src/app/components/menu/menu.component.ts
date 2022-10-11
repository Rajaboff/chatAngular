import { Component, OnInit } from '@angular/core';
import { INavigation } from 'src/app/interfaces/navigation.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  navigations: INavigation[] = [
    {
      color: '#f2a751',
      icon: 'group',
      label: 'Создать группу',
      toggle: false,
      active: false
    },
    {
      color: '#f2a751',
      icon: 'web',
      label: 'Создать канал',
      toggle: false,
      active: false
    },
    {
      color: '#f2a751',
      icon: 'turned_in',
      label: 'Избранное',
      toggle: false,
      active: false
    },
    {
      color: '#f2a751',
      icon: 'settings',
      label: 'Настройки',
      toggle: false,
      active: false
    },
    {
      color: '#f2a751',
      icon: 'brightness_low',
      label: 'Ночной режим',
      toggle: true,
      active: false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
