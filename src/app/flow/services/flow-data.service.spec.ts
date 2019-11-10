import { TestBed } from '@angular/core/testing';

import { FlowDataService } from './flow-data.service';

describe('FlowDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlowDataService = TestBed.get(FlowDataService);
    expect(service).toBeTruthy();
  });
});
