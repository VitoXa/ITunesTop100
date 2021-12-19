import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Album } from '../../shared/album.model';

import { AlbumInfoModalComponent } from './album-info-modal.component';

describe('AlbumInfoModalComponent', () => {
  let component: AlbumInfoModalComponent;
  let fixture: ComponentFixture<AlbumInfoModalComponent>;
  const album: Album = {
    id: '1590035691',
    title: '30 - Adele',
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
    position: 1,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumInfoModalComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {album},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
