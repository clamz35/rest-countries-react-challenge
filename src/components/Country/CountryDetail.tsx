import { useAtom } from "jotai";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CountryInterface } from "../../models/country.model";
import { countryAtom, countryIdAtom } from "../../stores/countries.store";
import { CountryView } from "./CountryView";

export function CountryDetail() {
  const [, setCountryId] = useAtom(countryIdAtom);
  const [country] = useAtom<CountryInterface | null>(countryAtom);
  const params = useParams();
  const countryCode = params.countryCode as string;
  useEffect(() => {
    setCountryId(countryCode);
  });

  if (!country) return <>No Country</>;
  return (
    <div>
      <CountryView country={country}></CountryView>
    </div>
  );
}
