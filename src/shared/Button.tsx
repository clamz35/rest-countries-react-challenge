import { styled } from "@stitches/react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const ButtonStyled = styled("button", {
  "background-color": "var(--clr-secondary-contrast)",
  color: "var(--clr-primary)",
  border: "none",
  borderRadius: "2px",
  boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.293139)",
  lineHeight: "1",
  fontSize: "var(--fs-300)",
  fontWeight: "300",
  padding: "0.375rem 24px",
});

export function Button({
  children,
  onClick,
  className,
  ...props
}: ButtonProps) {
  return (
    <ButtonStyled
      className={`btn ${className}`}
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}
