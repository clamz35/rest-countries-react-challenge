import { styled } from "@stitches/react";
import { useAtom } from "jotai";
import { countriesRegionAtom } from "../../stores/countries.store";

type CountriesDropdownItemProps = {
  region: string;
  onRegionSelected?: (region: string | null) => void;
};

const Div = styled("div", {
  padding: "0.25rem 16px",
  transition: "background-color 0.2s ease-in-out, color 0.3s ease",
  backgroundColor: "var(--clr-primary-contrast)",
  cursor: "pointer",
  "&:hover": {
    background: "var(--clr-tertiary)",
    color: "var(--clr-tertiary-contrast)",
  },
});

export function CountriesDropdownItem({
  region,
  onRegionSelected = () => {},
}: CountriesDropdownItemProps) {
  const [regionFilter, setCountriesRegionFilter] = useAtom(countriesRegionAtom);

  const onClick = (region: string) => {
    let regionSelected = region === regionFilter ? null : region;

    setCountriesRegionFilter(regionSelected);

    onRegionSelected(regionSelected);
  };

  return <Div onClick={() => onClick(region)}>{region}</Div>;
}
