import { useAtom } from "jotai";
import { isDarkModeAtom } from "../../stores/theme.store";
import { styled } from "../../utils/breakpoints";
import { HeaderTitle } from "./HeaderTitle";
import { ThemeToggle } from "./ThemeToggle";

const HeaderStyle = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem 16px",
  boxShadow: "var(--header-box-shadow, 0px 2px 4px rgba(0, 0, 0, 0.0562443))",
  backgroundColor: "var(--clr-header-bg, var(--clr-secondary-contrast))",
  "@md": {
    paddingInline: "81px",
  },
});

const ThemeToggleStyled = styled("div", {
  cursor: "pointer",
});

export function Header() {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

  return (
    <HeaderStyle>
      <HeaderTitle />

      <ThemeToggleStyled onClick={() => setIsDarkMode(!isDarkMode)}>
        <ThemeToggle isDarkMode={isDarkMode} />
      </ThemeToggleStyled>
    </HeaderStyle>
  );
}
