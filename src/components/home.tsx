import { styled } from "@stitches/react";
import { useAtom } from "jotai";
import { SearchInput } from "../shared/SearchInput";
import { countriesFilterQuery } from "../stores/countries.store";
import { Countries } from "./Countries";

const Div = styled("div", {
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
});

export function Home() {
  const [search, setSearch] = useAtom(countriesFilterQuery);

  return (
    <Div>
      <SearchInput value={search} onValueChange={setSearch} />
      <Countries />
    </Div>
  );
}
