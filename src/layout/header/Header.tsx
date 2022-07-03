import { styled } from "@stitches/react";
import { useAtom } from "jotai";
import { isDarkModeAtom } from "../../stores/theme.store";
import { themeClassName } from "../../utils/theme-class-name";
import { HeaderTitle } from "./HeaderTitle";
import { ThemeToggle } from "./ThemeToggle";

const HeaderStyle = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem 16px",
  boxShadow: "var(--header-box-shadow, 0px 2px 4px rgba(0, 0, 0, 0.0562443))",
  backgroundColor: "var(--clr-header-bg, var(--clr-secondary-contrast))",
});

const ThemeToggleStyled = styled("div", {
  cursor: "pointer",
});

export function Header() {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

  return (
    <HeaderStyle className={themeClassName(isDarkMode)}>
      <HeaderTitle />

      <ThemeToggleStyled onClick={() => setIsDarkMode(!isDarkMode)}>
        <ThemeToggle isDarkMode={isDarkMode} />
      </ThemeToggleStyled>
    </HeaderStyle>
  );
}
