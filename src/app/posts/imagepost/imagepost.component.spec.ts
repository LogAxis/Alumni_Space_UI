import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagepostComponent } from './imagepost.component';

describe('ImagepostComponent', () => {
  let component: ImagepostComponent;
  let fixture: ComponentFixture<ImagepostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagepostComponent]
    });
    fixture = TestBed.createComponent(ImagepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
