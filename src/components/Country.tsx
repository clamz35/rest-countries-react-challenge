import { CountryInterface } from "../models/country.model";
import { Card } from "../shared/Card";
import { styled } from "../utils/breakpoints";
import { CountryImage } from "./CountryImage";
import { CountryInfos } from "./CountryInfos";

const Div = styled(Card, {
  display: "flex",
  gap: "16px",
  alignItems: "center",
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
