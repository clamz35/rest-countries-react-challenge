import axios, { AxiosResponse } from "axios";
import { CountryInterface } from "../models/country.model";

class CountriesApi {
  getCountries(): Promise<AxiosResponse<CountryInterface[], any>> {
    return axios.get<CountryInterface[]>("https://restcountries.com/v2/all");
  }

  getCountry(code: string): Promise<CountryInterface | null> {
    return axios
      .get<CountryInterface>(`https://restcountries.com/v2/alpha/${code}`)
      .catch((err) => {
        return null;
      })
      .then((response) => {
        if (!response) return null;

        return response.data;
      });
  }

  getCountriesByRegion(region: string): Promise<CountryInterface[] | null> {
    return axios
      .get<CountryInterface[]>(`https://restcountries.com/v2/region/${region}`)
      .catch((err) => {
        return null;
      })
      .then((response) => {
        if (!response) return null;

        return response.data;
      });
  }

  getCountryBorders(
    country: CountryInterface
  ): Promise<CountryInterface[] | null> {
    return axios
      .get<CountryInterface[]>(
        `https://restcountries.com/v2/alpha?codes=${country.borders.join(",")}`
      )
      .catch((err) => {
        return null;
      })
      .then((response) => {
        if (!response) return null;

        return response.data;
      });
  }
}

export const countriesApi = new CountriesApi();
