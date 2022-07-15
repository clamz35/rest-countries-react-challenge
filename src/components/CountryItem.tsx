import { styled } from "@stitches/react";

type CountryItemProps = {
  label: string;
  value: string | number;
};

const Div = styled("div", {
  fontSize: "var(--fs-300)",
});

const LabelStyled = styled("span", {
  fontWeight: "600",
});

const ValueStyled = styled("span", {
  fontWeight: "300",
});

export function CountryItem({ label, value }: CountryItemProps) {
  if (!value) return null;
  return (
    <Div>
      <LabelStyled>{label}</LabelStyled>: <ValueStyled>{value}</ValueStyled>
    </Div>
  );
}
