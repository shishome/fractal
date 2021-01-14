import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwirlInternalImagesComponent } from './swirl-internal-images.component';

describe('SwirlInternalImagesComponent', () => {
  let component: SwirlInternalImagesComponent;
  let fixture: ComponentFixture<SwirlInternalImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwirlInternalImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwirlInternalImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
