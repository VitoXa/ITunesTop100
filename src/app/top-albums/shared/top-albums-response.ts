export interface TopAlbumsResponse {
  feed: Feed;
}

export interface Feed {
  author: Author;
  entry: AlbumEntry[];
  updated: Name;
  rights: Name;
  title: Name;
  icon: Name;
  link: Link2[];
  id: Name;
}

export interface Link2 {
  attributes: Attributes8;
}

export interface Attributes8 {
  rel: string;
  type?: string;
  href: string;
}

export interface AlbumEntry {
  'im:name': Name;
  'im:image': Imimage[];
  'im:itemCount': Name;
  'im:price': Imprice;
  'im:contentType': ImcontentType2;
  rights: Name;
  title: Name;
  link: Link;
  id: Id;
  'im:artist': Imartist;
  category: Category;
  'im:releaseDate': ImreleaseDate;
}

export interface ImreleaseDate {
  label: string;
  attributes: Name;
}

export interface Category {
  attributes: Attributes7;
}

export interface Attributes7 {
  'im:id': string;
  term: string;
  scheme: string;
  label: string;
}

export interface Imartist {
  label: string;
  attributes?: Attributes6;
}

export interface Attributes6 {
  href: string;
}

export interface Id {
  label: string;
  attributes: Attributes5;
}

export interface Attributes5 {
  'im:id': string;
}

export interface Link {
  attributes: Attributes4;
}

export interface Attributes4 {
  rel: string;
  type: string;
  href: string;
}

export interface ImcontentType2 {
  'im:contentType': ImcontentType;
  attributes: Attributes3;
}

export interface ImcontentType {
  attributes: Attributes3;
}

export interface Attributes3 {
  term: string;
  label: string;
}

export interface Imprice {
  label: string;
  attributes: Attributes2;
}

export interface Attributes2 {
  amount: string;
  currency: string;
}

export interface Imimage {
  label: string;
  attributes: Attributes;
}

export interface Attributes {
  height: string;
}

export interface Author {
  name: Name;
  uri: Name;
}

export interface Name {
  label: string;
}
