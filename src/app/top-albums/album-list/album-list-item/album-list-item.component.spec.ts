import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Album } from '../../shared/album.model';

import { AlbumListItemComponent } from './album-list-item.component';

describe('AlbumListItemComponent', () => {
  let component: AlbumListItemComponent;
  let fixture: ComponentFixture<AlbumListItemComponent>;
  let pageObject: AlbumListItemComponentPageObject;
  const album: Album = {
    id: '1590035691',
    link: 'https://music.apple.com/us/album/30/1590035691?uo=2',
    name: '30',
    tracksCount: 12,
    artist: {
      label: 'Adele',
      link: 'https://music.apple.com/us/artist/adele/262836961?uo=2',
    },
    category: {
      label: 'Pop',
      link: 'https://music.apple.com/us/genre/music-pop/id14?uo=2',
    },
    rights:
      '℗ 2021 Melted Stone under exclusive license to Columbia Records, a Division of Sony Music Entertainment',
    imgBigger: {
      src: 'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/170x170bb.png',
      sourceHeight: 170,
    },
    imgSmall: {
      src: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/55x55bb.png',
      sourceHeight: 55,
    },
    price: '$9.99',
    releaseDate: new Date('2021-11-19T07:00:00.000Z'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumListItemComponent],
    })
      // needs for change detection works in tests
      .overrideComponent(AlbumListItemComponent, {
        set: {
          changeDetection: ChangeDetectionStrategy.Default,
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListItemComponent);
    component = fixture.componentInstance;
    component.album = album;
    fixture.detectChanges();
    pageObject = new AlbumListItemComponentPageObject(fixture.nativeElement);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correctly', () => {
    expect(pageObject.albumImg.getAttribute('src')).toEqual(
      album.imgBigger.src
    );
    expect(pageObject.albumName.textContent?.trim()).toEqual(album.name);
    expect(pageObject.artistName.textContent?.trim()).toEqual(
      album.artist.label
    );
    expect(pageObject.trackInfo.textContent?.trim()).toEqual(
      '12 tracks · Pop · 2021'
    );
    expect(pageObject.linkToAppleMusic.textContent?.trim()).toEqual(
      '$9.99 on apple music'
    );
  });
});

class AlbumListItemComponentPageObject {
  get albumImg() {
    return this.host.querySelector(
      '.album-cover-holder img.album-cover'
    ) as HTMLElement;
  }

  get albumName() {
    return this.host.querySelector('.album-name') as HTMLElement;
  }

  get artistName() {
    return this.host.querySelector('.artist-name') as HTMLElement;
  }

  get trackInfo() {
    return this.host.querySelector(
      '.album-info-body p'
    ) as HTMLParagraphElement;
  }

  get linkToAppleMusic() {
    return this.host.querySelector('.uk-card-footer a') as HTMLAnchorElement;
  }

  constructor(private host: HTMLElement) {}
}
