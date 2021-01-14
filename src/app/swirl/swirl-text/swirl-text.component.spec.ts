import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwirlTextComponent } from './swirl-text.component';

describe('SwirlTextComponent', () => {
  let component: SwirlTextComponent;
  let fixture: ComponentFixture<SwirlTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwirlTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwirlTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
