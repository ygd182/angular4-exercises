import { TestBed, inject } from '@angular/core/testing';

import { UserGeneratorService } from './user-generator.service';

describe('UserGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserGeneratorService]
    });
  });

  it('should be created', inject([UserGeneratorService], (service: UserGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
