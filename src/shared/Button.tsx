import { styled } from "@stitches/react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const ButtonStyled = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "background-color": "var(--clr-secondary-contrast)",
  color: "var(--clr-primary)",
  border: "none",
  borderRadius: "2px",
  boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.293139)",
  lineHeight: "1.4",
  fontSize: "var(--fs-300)",
  fontWeight: "300",
  padding: "0.575rem 24px",
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out, color 0.4s ease",
  "&:hover": {
    color: "var(--clr-accent-contrast)",
    backgroundColor: "var(--clr-accent)",
  },
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
