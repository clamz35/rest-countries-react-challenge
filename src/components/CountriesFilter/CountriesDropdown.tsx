import { styled } from "../../utils/breakpoints";
import { CountriesDropdownItem } from "./CountriesDropdownItem";

type CountriesDropdownProps = {
  onRegionSelected?: (region: string | null) => void;
};

const Div = styled("div", {
  boxShadow: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
  background: "var(--clr-primary-contrast)",
  borderRadius: "5px",
  padding: "1.5rem 0",
  display: "flex",
  flexDirection: "column",
});

export function CountriesDropdown({
  onRegionSelected = () => {},
  ...props
}: CountriesDropdownProps) {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <Div {...props}>
      {regions.map((region) => (
        <CountriesDropdownItem
          key={region}
          region={region}
          onRegionSelected={onRegionSelected}
        />
      ))}
    </Div>
  );
}
