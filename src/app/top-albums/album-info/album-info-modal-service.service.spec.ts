import { TestBed } from '@angular/core/testing';

import { AlbumInfoModalServiceService } from './album-info-modal-service.service';

describe('AlbumInfoModalServiceService', () => {
  let service: AlbumInfoModalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumInfoModalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
