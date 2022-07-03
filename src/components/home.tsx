import { styled } from "@stitches/react";
import { SearchInput } from "../shared/SearchInput";
import { Countries } from "./Countries";

const Div = styled("div", {
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
});

export function Home() {
  return (
    <Div>
      <SearchInput />
      <Countries />
    </Div>
  );
}
