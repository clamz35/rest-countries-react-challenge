import { CountryInterface } from "../models/country.model";
import { styled } from "../utils/breakpoints";

type CountryImageProps = {
  country: CountryInterface;
};

const Img = styled("img", {
  height: "100%",
  width: "100%",
  objectFit: "cover",
});

export function CountryImage({ country }: CountryImageProps) {
  return (
    <>
      <Img src={country.flags.svg} alt={`${country.name} Flag`} />
    </>
  );
}
