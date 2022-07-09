import { Link } from "react-router-dom";
import { CountryInterface } from "../../models/country.model";
import { styled } from "../../utils/breakpoints";

type CountryLinkProps = {
  country: CountryInterface;
  children: React.ReactNode;
};

const LinkStyled = styled(Link, {
  cursor: "pointer",
  textDecoration: "none",
  color: "var(--clr-primary)",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(0.98)",
  },
});

export function CountryLink({ country, children }: CountryLinkProps) {
  return (
    <LinkStyled to={`/countries/${country.alpha2Code}`}>{children}</LinkStyled>
  );
}
