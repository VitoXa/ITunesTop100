import { TestBed } from '@angular/core/testing';

import { TopAlbumsService } from './top-albums.service';

describe('TopAlbumsService', () => {
  let service: TopAlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopAlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
