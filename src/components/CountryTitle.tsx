import { styled } from "@stitches/react";
import { CountryInterface } from "../models/country.model";

type CountryTitleProps = {
  country: CountryInterface;
};

const H2 = styled("h2", {
  fontWeight: 800,
  fontSize: "var(--fs-450)",
});

export function CountryTitle({ country }: CountryTitleProps) {
  return <H2>{country.name.official}</H2>;
}
