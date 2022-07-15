import { styled } from "@stitches/react";
import React, { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { InputWrapper } from "./InputWrapper";

type SearchInputProps = {
  value?: string;
  onValueChange?: (value: string) => void;
};

const FaSearchStyled = styled(FaSearch, {
  flexShrink: 0,
});
const InputWrapperStyled = styled(InputWrapper, {
  width: "min(480px, 100%)",
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
    <InputWrapperStyled onClick={() => searchInput.current?.focus()}>
      <FaSearchStyled />
      <InputStyled
        ref={searchInput}
        type="search"
        name="search"
        placeholder="Search for country..."
        value={value}
        onChange={handleChange}
      />
    </InputWrapperStyled>
  );
}
