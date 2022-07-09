import { styled } from "@stitches/react";
import { CountryInterface } from "../models/country.model";
import { CountryBasicInfos } from "./CountryBasicInfos";
import { CountryFullInfos } from "./CountryFullInfos";
import { CountryTitle } from "./CountryTitle";

const Div = styled("div", {
  padding: "1.5rem 24px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  backgroundColor: "var(--clr-secondary-contrast)",
});

type CountryInfosProps = {
  country: CountryInterface;
  full?: boolean;
};

export function CountryInfos({ country, full = false }: CountryInfosProps) {
  const countryInfoBlock = !full ? (
    <CountryBasicInfos country={country} />
  ) : (
    <CountryFullInfos country={country} />
  );
  return (
    <Div>
      <CountryTitle country={country} />
      {countryInfoBlock}
    </Div>
  );
}
