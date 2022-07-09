import { CountryInterface } from "../models/country.model";
import { styled } from "../utils/breakpoints";
import { CountryImage } from "./CountryImage";
import { CountryInfos } from "./CountryInfos";

const Div = styled("div", {
  display: "flex",
  gap: "16px",
  flexDirection: "column",
});

const CountryImageStyled = styled("div", {
  height: "160px",
});

type CountryProps = {
  country: CountryInterface;
};

export function Country({ country }: CountryProps) {
  return (
    <Div>
      <CountryImageStyled>
        <CountryImage country={country} />
      </CountryImageStyled>
      <CountryInfos country={country} />
    </Div>
  );
}
