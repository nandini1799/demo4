import { TestBed } from '@angular/core/testing';

import { MavenApiService } from './maven-api.service';

describe('MavenApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MavenApiService = TestBed.get(MavenApiService);
    expect(service).toBeTruthy();
  });
});
