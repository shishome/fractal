import { TestBed } from '@angular/core/testing';

import { ProjectManagerService } from './project-manager.service';

describe('ProjectManagerService', () => {
  let service: ProjectManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
