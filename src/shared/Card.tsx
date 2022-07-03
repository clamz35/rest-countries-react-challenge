import { styled } from "@stitches/react";

type CardProps = {
  children: React.ReactNode;
};

const CardStyled = styled("div", {
  boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)",
  borderRadius: "5px",
});

export function Card({ children }: CardProps) {
  return <CardStyled>{children}</CardStyled>;
}
