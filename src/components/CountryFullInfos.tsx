import { CountryInterface } from "../models/country.model";
import { styled } from "../utils/breakpoints";
import { CountryItem } from "./CountryItem";

type CountryFullInfosProps = {
  country: CountryInterface;
};

const Div = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  "@ld": {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
const CountryGroupStyled = styled("div", {
  lineHeight: "2rem",
});

export function CountryFullInfos({ country }: CountryFullInfosProps) {
  const languages = country.languages?.map((l) => l.name).join(", ");
  const currencies = country.currencies?.map((c) => c.name).join(", ");
  return (
    <Div>
      <CountryGroupStyled>
        <CountryItem label="Native Name" value={country.nativeName} />
        <CountryItem label="Population" value={country.population} />
        <CountryItem label="Region" value={country.region} />
        <CountryItem label="Sub Region" value={country.subregion} />
        <CountryItem label="Capital" value={country.capital} />
      </CountryGroupStyled>
      <CountryGroupStyled>
        <CountryItem label="Top Level Domain" value={country.tld?.join(", ")} />
        <CountryItem label="Currencies" value={currencies} />
        <CountryItem label="Languages" value={languages} />
      </CountryGroupStyled>
    </Div>
  );
}
