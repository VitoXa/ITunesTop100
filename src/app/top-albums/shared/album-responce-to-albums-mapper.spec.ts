import { mapToAlbum } from './album-responce-to-albums-mapper';
import { Album } from './album.model';

describe('mapToAlbum', () => {
  it('should parse Albums correctly', () => {
    const parsedAlbum = mapToAlbum(mockResponseEntry, 0);

    expect(parsedAlbum).toEqual(album);
  });
});

export const mockResponseEntry = {
  'im:name': { label: '30' },
  'im:image': [
    {
      label:
        'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/55x55bb.png',
      attributes: { height: '55' },
    },
    {
      label:
        'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/60x60bb.png',
      attributes: { height: '60' },
    },
    {
      label:
        'https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/170x170bb.png',
      attributes: { height: '170' },
    },
  ],
  'im:itemCount': { label: '12' },
  'im:price': {
    label: '$9.99',
    attributes: { amount: '9.99', currency: 'USD' },
  },
  'im:contentType': {
    'im:contentType': {
      attributes: { term: 'Album', label: 'Album' },
    },
    attributes: { term: 'Music', label: 'Music' },
  },
  rights: {
    label:
      '℗ 2021 Melted Stone under exclusive license to Columbia Records, a Division of Sony Music Entertainment',
  },
  title: { label: '30 - Adele' },
  link: {
    attributes: {
      rel: 'alternate',
      type: 'text/html',
      href: 'https://music.apple.com/us/album/30/1590035691?uo=2',
    },
  },
  id: {
    label: 'https://music.apple.com/us/album/30/1590035691?uo=2',
    attributes: { 'im:id': '1590035691' },
  },
  'im:artist': {
    label: 'Adele',
    attributes: {
      href: 'https://music.apple.com/us/artist/adele/262836961?uo=2',
    },
  },
  category: {
    attributes: {
      'im:id': '14',
      term: 'Pop',
      scheme: 'https://music.apple.com/us/genre/music-pop/id14?uo=2',
      label: 'Pop',
    },
  },
  'im:releaseDate': {
    label: '2021-11-19T00:00:00-07:00',
    attributes: { label: 'November 19, 2021' },
  },
};

export const album: Album = {
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
  position: 1
};
