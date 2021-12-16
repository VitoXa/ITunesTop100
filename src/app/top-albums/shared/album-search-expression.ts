import { Album } from './album.model';

export default function (album: Album, searchString: string): boolean {
  const normalizedSearchString = normalize(searchString);
  const searchEntires = [album.name, album.artist.label, album.category.label];

  return searchEntires.some((str) =>
    normalize(str).search(normalizedSearchString) !== -1
  );
}

function normalize(str: string): string {
  return str.trim().toLowerCase();
}
