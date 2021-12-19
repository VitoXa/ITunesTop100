export interface Album {
  id: string;
  link: string
  name: string;
  tracksCount: number;
  artist: LabeledLink;
  rights: string;
  imgSmall: ImgLink;
  imgBigger: ImgLink;
  category: LabeledLink;
  releaseDate: Date;
  price: string;
  position: number;
}


export interface LabeledLink {
  label: string
  link?: string;
}

export interface ImgLink {
  src: string;
  sourceHeight: number;
}
