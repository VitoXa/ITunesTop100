import { Album } from './album.model';
import { AlbumEntry, Imimage } from './top-albums-response';

export function mapToAlbum(albumResponse: AlbumEntry, index: number): Album {
  return {
    id: albumResponse.id.attributes['im:id'],
    link: albumResponse.id.label,
    name: albumResponse['im:name'].label,
    tracksCount: Number.parseInt(albumResponse['im:itemCount'].label),
    artist: {
      label: albumResponse['im:artist'].label,
      link: albumResponse['im:artist'].attributes?.href,
    },
    category: {
      label: albumResponse.category.attributes.term,
      link: albumResponse.category.attributes.scheme,
    },
    rights: albumResponse.rights.label,
    imgBigger: mapImage(albumResponse['im:image'][2]),
    imgSmall: mapImage(albumResponse['im:image'][0]),
    price: albumResponse['im:price'].label,
    releaseDate: new Date(albumResponse['im:releaseDate'].label),
    position: index + 1
  };
}

function mapImage(imgResponse: Imimage) {
  return {
    src: imgResponse.label,
    sourceHeight: Number.parseInt(imgResponse.attributes.height),
  };
}
