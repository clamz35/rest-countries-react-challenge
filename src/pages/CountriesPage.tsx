import { styled } from "@stitches/react";
import { useAtom } from "jotai";
import React from "react";
import { Countries } from "../components/Countries";
import { CountriesFilter } from "../components/CountriesFilter/CountriesFilter";
import { SearchInput } from "../shared/SearchInput";
import { countriesFilterQuery } from "../stores/countries.store";

const Div = styled("div", {
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
});

export function CountriesPages() {
  const [search, setSearch] = useAtom(countriesFilterQuery);
  return (
    <Div>
      <SearchInput value={search} onValueChange={setSearch} />
      <CountriesFilter />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Countries />
      </React.Suspense>
    </Div>
  );
}
