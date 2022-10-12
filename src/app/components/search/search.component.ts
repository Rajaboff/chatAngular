import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searching = new EventEmitter<string>();

  value: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  emitingValue() {
    this.searching.emit(this.value);
  }

}
