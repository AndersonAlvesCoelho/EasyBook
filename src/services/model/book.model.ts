interface IIndustryIdentifierProps {
  type: string;
  identifier: string;
}

interface IReadingModesProps {
  text: boolean;
  image: boolean;
}

interface IPanelizationSummaryProps {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

interface IImageLinksProps {
  smallThumbnail: string;
  thumbnail: string;
}

export interface IVolumeInfoProps {
  title: string;
  subtitle?: string;
  authors: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers: IIndustryIdentifierProps[];
  readingModes: IReadingModesProps;
  pageCount?: number;
  printType?: string;
  categories: string[];
  maturityRating?: string;
  allowAnonLogging?: boolean;
  contentVersion?: string;
  panelizationSummary?: IPanelizationSummaryProps;
  imageLinks: IImageLinksProps;
  language?: string;
  previewLink?: string;
  infoLink?: string;
  canonicalVolumeLink?: string;
}

interface ISaleInfoProps {
  country: string;
  saleability: string;
  isEbook: boolean;
}

interface IEpubProps {
  isAvailable: boolean;
}

interface IPdfProps {
  isAvailable: boolean;
  acsTokenLink?: string;
}

interface IAccessInfoProps {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: IEpubProps;
  pdf: IPdfProps;
  webReaderLink?: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

interface ISearchInfoProps {
  textSnippet: string;
}

export interface IBookVolumeProps {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: IVolumeInfoProps;
  saleInfo: ISaleInfoProps;
  accessInfo: IAccessInfoProps;
  searchInfo?: ISearchInfoProps;
}

export interface IBookVolumesProps {
  kind: string;
  totalItems: number;
  items: IBookVolumeProps[];
}
