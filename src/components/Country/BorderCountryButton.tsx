import { CountryInterface } from "../../models/country.model";
import { Button } from "../../shared/Button";
import { CountryLink } from "./CountryLink";

type BorderCountryButtonProps = {
  country: CountryInterface;
};

export function BorderCountryButton({ country }: BorderCountryButtonProps) {
  return (
    <CountryLink country={country}>
      <Button>{country.name}</Button>
    </CountryLink>
  );
}
