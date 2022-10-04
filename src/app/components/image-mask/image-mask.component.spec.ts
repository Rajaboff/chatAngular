import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMaskComponent } from './image-mask.component';

describe('ImageMaskComponent', () => {
  let component: ImageMaskComponent;
  let fixture: ComponentFixture<ImageMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
