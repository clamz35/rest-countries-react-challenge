import { CountryInterface } from "../models/country.model";

type CountryImageProps = {
  country: CountryInterface;
};

export function CountryImage({ country }: CountryImageProps) {
  return (
    <>
      <img src={country.flags.svg} alt={`${country.name.official} Flag`} />
    </>
  );
}
