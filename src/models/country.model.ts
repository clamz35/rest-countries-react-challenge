import { CountryFlagInterface } from "./country-flag.model";
import { CountryNameInterface } from "./country-name.model";

export interface CountryInterface {
  name: CountryNameInterface;
  flags: CountryFlagInterface;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  languages: { [key: string]: string };
}
