import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlideshowBackdrop2Component } from './slideshow-backdrop2.component';

describe('SlideshowBackdropComponent', () => {
  let component: SlideshowBackdrop2Component;
  let fixture: ComponentFixture<SlideshowBackdrop2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SlideshowBackdrop2Component],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SlideshowBackdrop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
