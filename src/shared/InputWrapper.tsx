import { styled } from "@stitches/react";

type InputWrapperProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const InputWrapperStyled = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: "1.625rem",
  boxShadow: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
  paddingInline: "32px",
  borderRadius: "5px",
  color: "var(--clr-primary-300)",
  backgroundColor: "var(--clr-primary-contrast-300)",

  "&:focus-within": {
    outline: "1px solid black",
  },
});
export function InputWrapper({
  children,
  onClick,
  ...props
}: InputWrapperProps) {
  return (
    <InputWrapperStyled className="input-wrapper" onClick={onClick} {...props}>
      {children}
    </InputWrapperStyled>
  );
}
