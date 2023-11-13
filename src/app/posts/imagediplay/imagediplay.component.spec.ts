import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagediplayComponent } from './imagediplay.component';

describe('ImagediplayComponent', () => {
  let component: ImagediplayComponent;
  let fixture: ComponentFixture<ImagediplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagediplayComponent]
    });
    fixture = TestBed.createComponent(ImagediplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
