import { styled } from "@stitches/react";

const Div = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export function ModeActions({ children }: any) {
  return <Div>{children}</Div>;
}
