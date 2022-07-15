import { styled } from "@stitches/react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { InputWrapper } from "../../shared/InputWrapper";
import { CountriesDropdown } from "./CountriesDropdown";

const Div = styled("div", {
  position: "relative",
  maxWidth: "300px",
});
const InputWrapperStyled = styled(InputWrapper, {});
const LabelStyled = styled("span", {
  border: "none",
  background: "none",
  flex: 1,
  padding: "1rem 32px 1rem 0",
  fontSize: "var(--fs-200)",
  userSelect: "none",
  "&:focus": {
    outline: "none",
  },
});

const DropdownContainer = styled(CountriesDropdown, {
  position: "absolute",
  inset: "calc(100% + 6px) 0 auto",
  left: "0",
  zIndex: "10",
  userSelect: "none",
});

const FaAngleDownStyled = styled(FaAngleDown, {
  color: "var(--clr-primary)",
});
export function CountriesFilter() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <Div>
      <InputWrapperStyled onClick={() => setDropdownOpen(!dropdownOpen)}>
        <LabelStyled>Filter by Region</LabelStyled>
        <FaAngleDownStyled />
      </InputWrapperStyled>
      {dropdownOpen && (
        <DropdownContainer onRegionSelected={() => setDropdownOpen(false)} />
      )}
    </Div>
  );
}
