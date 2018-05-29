import { TestBed, inject } from '@angular/core/testing';

import { FindItServiceService } from './find-it-service.service';

describe('FindItServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindItServiceService]
    });
  });

  it('should be created', inject([FindItServiceService], (service: FindItServiceService) => {
    expect(service).toBeTruthy();
  }));
});
