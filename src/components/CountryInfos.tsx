import { styled } from "@stitches/react";
import { CountryInterface } from "../models/country.model";
import { CountryBasicInfos } from "./CountryBasicInfos";
import { CountryTitle } from "./CountryTitle";

const Div = styled("div", {
  padding: "1.5rem 24px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

type CountryInfosProps = {
  country: CountryInterface;
};

export function CountryInfos({ country }: CountryInfosProps) {
  return (
    <Div>
      <CountryTitle country={country} />
      <CountryBasicInfos country={country} />
    </Div>
  );
}
