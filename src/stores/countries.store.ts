import { atom, Getter } from "jotai";
import { atomWithQuery } from "jotai/query";
import { countriesApi } from "../api/countries.api";

export const countriesAtom = atomWithQuery((get) => ({
  queryKey: ["countries"],
  queryFn: async () => {
    const res = await countriesApi.getCountries();
    return res.data.sort((a, b) => {
      if (a.name.common < b.name.common) return -1;
      else return 1;
    });
  },
}));

export const countriesFilterQuery = atom("");

export const countriesFiltered = atom((get: Getter) =>
  get(countriesAtom).filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(get(countriesFilterQuery).toLowerCase())
  )
);
