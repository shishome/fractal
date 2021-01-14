import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwirlComponent } from './swirl.component';

describe('SwirlComponent', () => {
  let component: SwirlComponent;
  let fixture: ComponentFixture<SwirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwirlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
