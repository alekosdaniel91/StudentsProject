import { TestBed } from '@angular/core/testing';

import { DataStudentsApiService } from './datastudents-api.service';

describe('DataStudentsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataStudentsApiService = TestBed.get(DataStudentsApiService);
    expect(service).toBeTruthy();
  });
});
