import { useAtom } from "jotai";
import React from "react";
import { Countries } from "../components/Countries";
import { CountriesFilter } from "../components/CountriesFilter/CountriesFilter";
import { Loading } from "../shared/Loading";
import { SearchInput } from "../shared/SearchInput";
import { countriesFilterQuery } from "../stores/countries.store";
import { styled } from "../utils/breakpoints";

const Div = styled("div", {
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
});

const CountriesToolbar = styled("div", {
  display: "flex",
  gap: "2.5rem",
  flexDirection: "column",
  marginBottom: "3rem",
  "@md": {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export function CountriesPages() {
  const [search, setSearch] = useAtom(countriesFilterQuery);
  return (
    <Div>
      <CountriesToolbar>
        <SearchInput value={search} onValueChange={setSearch} />
        <CountriesFilter />
      </CountriesToolbar>
      <React.Suspense fallback={<Loading />}>
        <Countries />
      </React.Suspense>
    </Div>
  );
}
