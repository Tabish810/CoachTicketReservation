import { TestBed, inject } from '@angular/core/testing';

import { PassValidateService } from './pass-validate.service';

describe('PassValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassValidateService]
    });
  });

  it('should be created', inject([PassValidateService], (service: PassValidateService) => {
    expect(service).toBeTruthy();
  }));
});
