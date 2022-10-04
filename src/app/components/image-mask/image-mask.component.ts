import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-mask',
  templateUrl: './image-mask.component.html',
  styleUrls: ['./image-mask.component.scss']
})
export class ImageMaskComponent implements OnInit {

  @Input() size: number = 54;
  @Input() radius: number = 999;
  @Input() initials: string = "AA";

  constructor() { }

  ngOnInit(): void {
  }

}
