import { TestBed } from '@angular/core/testing';

import { SwirlContentManagerService } from './swirl-content-manager.service';

describe('SwirlContentManagerService', () => {
  let service: SwirlContentManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwirlContentManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
