import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import {
  album as parsedAlbum,
  mockResponseEntry,
} from './album-responce-to-albums-mapper.spec';
import { TopAlbumsService } from './top-albums.service';

describe('TopAlbumsService', () => {
  let service: TopAlbumsService;
  let httpClientMock: jasmine.SpyObj<HttpClient>;
  let mockResponseData = { feed: { entry: [mockResponseEntry] } };

  beforeEach(() => {
    httpClientMock = jasmine.createSpyObj<HttpClient>(['get']);
    httpClientMock.get.and.returnValue(of(mockResponseData));

    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientMock,
        },
        TopAlbumsService,
      ],
    });
    service = TestBed.inject(TopAlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return mapped Albums', async () => {
    // Arrange
    const albumsCount = 111;

    // Act
    const albums = await firstValueFrom(service.getTopAlbums(albumsCount));

    // Assert
    expect(httpClientMock.get).toHaveBeenCalledOnceWith(
      'https://itunes.apple.com/us/rss/topalbums/limit=111/json'
    );
    expect(albums.length).toEqual(1);
    expect(albums[0]).toEqual(parsedAlbum);
  });
});
