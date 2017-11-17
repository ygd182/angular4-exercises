import { TestBed, inject } from '@angular/core/testing';

import { ArtistDetailService } from './artist-detail.service';

describe('ArtistDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistDetailService]
    });
  });

  it('should be created', inject([ArtistDetailService], (service: ArtistDetailService) => {
    expect(service).toBeTruthy();
  }));
});
