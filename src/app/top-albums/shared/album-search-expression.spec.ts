import albumSearchExpression from './album-search-expression';
import { Album } from './album.model';

describe('albumSearchExpression', () => {
  const album: Album = {
    id: '1590035691',
    title: '30 - Adele',
    link: 'https://music.apple.com/us/album/30/1590035691?uo=2',
    name: '30 and Stuff',
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

  it('should check artist name', () => {
    expect(albumSearchExpression(album, 'Adele')).toBeTrue();
  });

  it('should check artist name case unsensitive and trimmed', () => {
    expect(albumSearchExpression(album, '  ade ')).toBeTrue();
  });

  it('should check category', () => {
    expect(albumSearchExpression(album, 'Pop')).toBeTrue();
  });

  it('should check album name', () => {
    expect(albumSearchExpression(album, '  30 ')).toBeTrue();
  });

  it('should check album name no matter case', () => {
    expect(albumSearchExpression(album, '  stuff ')).toBeTrue();
  });

  it('should not match if artist name is incorrect', () => {
    expect(albumSearchExpression(album, 'Not Adele')).toBeFalse();
  });
});
