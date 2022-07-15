import { useAtom } from "jotai";
import { Card } from "../shared/Card";
import { countriesFiltered } from "../stores/countries.store";
import { styled } from "../utils/breakpoints";
import { Country } from "./Country";
import { CountryLink } from "./Country/CountryLink";

const Div = styled("div", {
  display: "flex",
  gap: "2.5rem",
  flexDirection: "column",
  "@md": {
    display: "grid",
    baackground: "red",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  },
});

export function Countries() {
  const [countries] = useAtom(countriesFiltered);
  if (countries?.length === 0) {
    return <>No Countries</>;
  }
  return (
    <Div>
      {countries ? (
        countries.map((country) => (
          <CountryLink key={country.alpha2Code} country={country}>
            <Card height="fullHeight">
              <Country country={country} />
            </Card>
          </CountryLink>
        ))
      ) : (
        <div>Error</div>
      )}
    </Div>
  );
}
