import { styled } from "@stitches/react";

type CardProps = {
  children: React.ReactNode;
  height: "fullHeight";
};

const CardStyled = styled("div", {
  boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)",
  borderRadius: "5px",
  overflow: "hidden",
  variants: {
    height: {
      fullHeight: {
        height: "100%",
      },
    },
  },
});

export function Card({ children, height }: CardProps) {
  return <CardStyled height={height}>{children}</CardStyled>;
}
