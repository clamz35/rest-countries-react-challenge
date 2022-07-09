import { atom, Getter } from "jotai";
import { atomWithQuery } from "jotai/query";
import { countriesApi } from "../api/countries.api";

export const countriesAtom = atomWithQuery((get) => ({
  queryKey: ["countries"],
  queryFn: async () => {
    const res = await countriesApi.getCountries();
    return res.data.sort((a, b) => {
      if (a.name < b.name) return -1;
      else return 1;
    });
  },
}));

export const countriesFilterQuery = atom("");

export const countriesFiltered = atom(async (get: Getter) =>
  get(countriesAtom).filter((country) =>
    country.name.toLowerCase().includes(get(countriesFilterQuery).toLowerCase())
  )
);

export const countryIdAtom = atom<string | null>(null);
export const countryAtom = atomWithQuery((get) => ({
  queryKey: ["countries", get(countryIdAtom)],
  initialData: null,
  queryFn: async ({ queryKey: [, code] }: { queryKey: any }) => {
    if (!code) return await null;
    const res = await countriesApi.getCountry(code);
    return res;
  },
}));
