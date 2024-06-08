export interface Country {
  awsRegion: string;
  capital?: string;
  code: string;
  continent: Continent;
  currencies: string[];
  currency?: string;
  emoji: string;
  emojiU: string;
  languages: Language[];
  name: string;
  native: string;
  phone: string;
  states: State[];
}

export interface Language {
  code: string;
  name: string;
  native: string;
  rtl: boolean;
}

export interface Continent {
  code: string;
  countries: Country[];
  name: string;
}

export interface State {
  code: string;
  country: Country;
  name: string;
}
