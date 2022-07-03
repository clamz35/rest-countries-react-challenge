import { useAtom } from "jotai";
import { countriesFiltered } from "../stores/countries.store";
import { styled } from "../utils/breakpoints";
import { Country } from "./Country";

const Div = styled("div", {
  display: "flex",
  gap: "2.5rem",
  flexDirection: "column",
  "@md": {
    display: "grid",
    baackground: "red",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  },
});

export function Countries() {
  const [countries] = useAtom(countriesFiltered);
  return (
    <Div>
      {countries.map((country, index) => (
        <Country key={index} country={country} />
      ))}
    </Div>
  );
}
