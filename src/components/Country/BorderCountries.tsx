import { styled } from "@stitches/react";
import { useQuery } from "react-query";
import { countriesApi } from "../../api/countries.api";
import { CountryInterface } from "../../models/country.model";
import { BorderCountryButton } from "./BorderCountryButton";

type BorderCountriesProps = {
  country: CountryInterface;
};

const Div = styled("div", {
  padding: "1.5rem 24px",
});

const LabelStyled = styled("span", {
  fontWeight: 600,
});

const BordersButtonsContainer = styled("div", {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
});

export function BorderCountries({ country }: BorderCountriesProps) {
  const hasBorders = country?.borders?.length > 0;
  const bordersCountries = useQuery(
    ["countries", country.alpha2Code, "borders"],
    () => (hasBorders ? countriesApi.getCountryBorders(country) : null)
  );

  if (!bordersCountries?.data || bordersCountries.data.length === 0)
    return <></>;
  return (
    <Div>
      <LabelStyled>BorderCountries</LabelStyled>
      <BordersButtonsContainer>
        {bordersCountries.data.map((borderCountry) => (
          <BorderCountryButton
            key={borderCountry.alpha2Code}
            country={borderCountry}
          />
        ))}
      </BordersButtonsContainer>
    </Div>
  );
}
