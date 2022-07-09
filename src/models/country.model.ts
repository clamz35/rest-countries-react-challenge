import { CountryCurrencyInterface } from "./country-currency.model";
import { CountryFlagInterface } from "./country-flag.model";
import { CountryLanguageInterface } from "./country-language.model";

export interface CountryInterface {
  name: string;
  nativeName: string;
  alpha2Code: string;
  flags: CountryFlagInterface;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string[];
  languages: CountryLanguageInterface[];
  currencies: CountryCurrencyInterface[];
  borders: string[];
}
