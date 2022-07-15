import { atom, Getter } from "jotai";
import { atomWithQuery } from "jotai/query";
import { countriesApi } from "../api/countries.api";
import { CountryInterface } from "../models/country.model";

const sortCountries = (countries: CountryInterface[]) => {
  return countries.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};

export const countriesAtom = atomWithQuery((get) => ({
  queryKey: ["countries"],
  queryFn: async () => {
    const res = await countriesApi.getCountries();
    return sortCountries(res.data);
  },
}));

export enum CountriesState {
  Loading = "loading",
  Success = "success",
  Error = "error",
}

export const countriesStateAtom = atom<CountriesState>(CountriesState.Loading);

export const countriesRegionAtom = atom<string | null>(null);
export const countriesByRegionAtom = atomWithQuery((get) => ({
  queryKey: ["countries", get(countriesRegionAtom)],
  keepPreviousData: true,

  queryFn: async ({ queryKey: [, region] }: { queryKey: any }) => {
    if (!region) return await null;

    const countries = await countriesApi.getCountriesByRegion(region);

    if (!countries) return await null;
    return sortCountries(countries);
  },
  initialData: null,
}));

export const countriesFilterQuery = atom("");

export const countriesFiltered = atom(
  async (get: Getter): Promise<CountryInterface[] | null> => {
    const countriesRegion = await get(countriesRegionAtom);
    let countries: CountryInterface[] | null | undefined = await get(
      countriesAtom
    );
    if (countriesRegion) {
      countries = await get(countriesByRegionAtom);
    }
    if (!countries) return await null;

    return countries?.filter((country) =>
      country.name
        .toLowerCase()
        .includes(get(countriesFilterQuery).toLowerCase())
    );
  }
);

export const countryIdAtom = atom<string | null>(null);
countryIdAtom.onMount = (setAtom) => {
  return () => {
    setAtom(null);
  };
};
export const countryAtom = atomWithQuery((get) => ({
  queryKey: ["countries", get(countryIdAtom)],
  initialData: null,
  queryFn: async ({ queryKey: [, code] }: { queryKey: any }) => {
    if (!code) return await null;
    const res = await countriesApi.getCountry(code);
    return res;
  },
}));
