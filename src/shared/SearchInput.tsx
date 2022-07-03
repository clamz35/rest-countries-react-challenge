import { styled } from "@stitches/react";
import React, { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

type SearchInputProps = {
  value?: string;
  onValueChange?: (value: string) => void;
};

const SearchWrapperStyled = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.625rem",
  boxShadow: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
  paddingLeft: "32px",
  borderRadius: "5px",
  color: "var(--clr-primary-300)",
  backgroundColor: "var(--clr-primary-contrast-300)",

  "&:focus-within": {
    outline: "1px solid black",
  },
});

const FaSearchStyled = styled(FaSearch, {
  flexShrink: 0,
});

const InputStyled = styled("input", {
  border: "none",
  background: "none",
  flex: 1,
  padding: "1rem 32px 1rem 0",
  fontSize: "var(--fs-200)",
  "&:focus": {
    outline: "none",
  },
});

export function SearchInput({
  value = "",
  onValueChange = () => {},
}: SearchInputProps) {
  let searchInput = React.createRef<HTMLInputElement>();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };
  return (
    <SearchWrapperStyled onClick={() => searchInput.current?.focus()}>
      <FaSearchStyled />
      <InputStyled
        ref={searchInput}
        type="search"
        name="search"
        placeholder="Search for country..."
        value={value}
        onChange={handleChange}
      />
    </SearchWrapperStyled>
  );
}
