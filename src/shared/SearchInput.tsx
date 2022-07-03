import { styled } from "@stitches/react";
import { FaSearch } from "react-icons/fa";

const SearchWrapperStyled = styled("div", {
  display: "flex",
  alignItems: "center",
  boxShadow: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
  padding: "1rem 32px",
  borderRadius: "5px",
  color: "var(--clr-primary-300)",
  backgroundColor: "var(--clr-primary-contrast-300)",
});
const InputStyled = styled("input", {
  border: "none",
  background: "none",
});

export function SearchInput() {
  return (
    <SearchWrapperStyled>
      <FaSearch />
      <InputStyled type="text" name="search" />
    </SearchWrapperStyled>
  );
}
