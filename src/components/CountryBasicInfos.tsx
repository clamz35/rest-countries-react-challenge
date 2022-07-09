import { CountryInterface } from "../models/country.model";
import { CountryItem } from "./CountryItem";

type CountryBasicInfosProps = {
  country: CountryInterface;
  full?: boolean;
};

export function CountryBasicInfos({
  country,
  full = false,
}: CountryBasicInfosProps) {
  return (
    <div>
      <CountryItem label="Population" value={country.population} />
      <CountryItem label="Region" value={country.region} />
      <CountryItem label="Capital" value={country.capital} />
    </div>
  );
}
