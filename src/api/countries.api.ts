import axios, { AxiosResponse } from "axios";
import { CountryInterface } from "../models/country.model";

class CountriesApi {
  getCountries(): Promise<AxiosResponse<CountryInterface[], any>> {
    return axios.get<CountryInterface[]>("https://restcountries.com/v3.1/all");
  }
}

export const countriesApi = new CountriesApi();
