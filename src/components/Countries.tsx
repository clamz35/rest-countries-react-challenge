import { styled } from "@stitches/react";
import { useAtom } from "jotai";
import { countriesAtom } from "../stores/countries.store";
import { Country } from "./Country";

const Div = styled("div", {
  display: "flex",
  gap: "2.5rem",
  flexDirection: "column",
});

export function Countries() {
  const [countries] = useAtom(countriesAtom);
  return (
    <Div>
      {countries.map((country, index) => (
        <Country key={index} country={country} />
      ))}
    </Div>
  );
}
