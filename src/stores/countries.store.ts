import { atomWithQuery } from "jotai/query";
import { countriesApi } from "../api/countries.api";

export const countriesAtom = atomWithQuery((get) => ({
  queryKey: ["countries"],
  queryFn: async () => {
    const res = await countriesApi.getCountries();
    return res.data;
  },
}));
