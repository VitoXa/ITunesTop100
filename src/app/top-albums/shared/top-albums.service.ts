import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { mapToAlbum } from './album-responce-to-albums-mapper';
import { Album } from './album.model';
import { TopAlbumsResponse } from './top-albums-response';

@Injectable()
export class TopAlbumsService {
  constructor(private http: HttpClient) {}

  getTopAlbums(limit: number): Observable<Album[]> {
    const url = `https://itunes.apple.com/us/rss/topalbums/limit=${limit}/json`;
    return this.http
      .get<TopAlbumsResponse>(url)
      .pipe(map((albumsResponse) => albumsResponse.feed.entry.map(mapToAlbum)));
  }
}
