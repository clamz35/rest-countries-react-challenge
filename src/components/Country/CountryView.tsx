import { CountryInterface } from "../../models/country.model";
import { styled } from "../../utils/breakpoints";
import { CountryImage } from "../CountryImage";
import { CountryInfos } from "../CountryInfos";
import { BorderCountries } from "./BorderCountries";

type CountryViewProps = {
  country: CountryInterface;
};

const Div = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2.75rem",
  "@ld": {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});

const CountryImageStyled = styled("div", {
  flex: 1,
  height: "160px",
  borderRadius: "10px",
  overflow: "hidden",
  "@md": {
    height: "unset",
  },
});

const CountryInfosStyled = styled("div", {
  flex: 1,
});

export function CountryView({ country }: CountryViewProps) {
  return (
    <Div>
      <CountryImageStyled>
        <CountryImage country={country} />
      </CountryImageStyled>
      <CountryInfosStyled>
        <CountryInfos country={country} full={true} />
        <BorderCountries country={country} />
      </CountryInfosStyled>
    </Div>
  );
}
