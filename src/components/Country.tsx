import { styled } from "@stitches/react";
import { CountryInterface } from "../models/country.model";
import { Card } from "../shared/Card";
import { CountryImage } from "./CountryImage";
import { CountryInfos } from "./CountryInfos";

const Div = styled(Card, {
  display: "flex",
  gap: "16px",
  alignItems: "center",
  flexDirection: "column",
});

type CountryProps = {
  country: CountryInterface;
};

export function Country({ country }: CountryProps) {
  return (
    <Div>
      <CountryImage country={country} />
      <CountryInfos country={country} />
    </Div>
  );
}
