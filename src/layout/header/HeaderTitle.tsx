import { styled } from "@stitches/react";

const TitleStyled = styled("h1", {
  fontSize: "var(--fs-300)",
  fontWeight: "800",
});

export function HeaderTitle() {
  return <TitleStyled>Where in the world</TitleStyled>;
}
