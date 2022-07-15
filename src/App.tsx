import { useAtom } from "jotai";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./assets/scss/styles.scss";
import { Header } from "./layout/header/Header";
import { isDarkModeAtom } from "./stores/theme.store";
import { styled } from "./utils/breakpoints";
import { themeClassName } from "./utils/theme-class-name";

const AppStyled = styled("div", {
  height: "100%",
  color: "var(--clr-primary)",
  backgroundColor: "var(--clr-primary-contrast-600)",
  "&.dark-mode": {
    "--clr-primary": "hsl(0, 0%, 100%)",
    "--clr-primary-300": "hsl(0, 0%, 100%)",
    "--clr-primary-contrast-300": "hsl(209, 23%, 22%)",
    "--clr-primary-contrast": " hsl(207, 26%, 17%)",
    "--clr-primary-contrast-600": " hsl(207, 26%, 17%)",
    "--clr-secondary-contrast": " hsl(209, 23%, 22%)",
    "--clr-accent": "hsl(0, 0%, 100%)",
    "--clr-accent-contrast": "hsl(0, 0% ,0%)",
    "--clr-tertiary": "hsl(0, 0% , 90%)",
    "--clr-tertiary-contrast": "hsl(0, 0% ,0%)",
  },
});

const MainStyled = styled("main", {
  margin: "40px 28px",
});

function App() {
  const [isDarkMode] = useAtom(isDarkModeAtom);
  useEffect(() => {
    document.title = "REST countries app - React";
  });

  return (
    <AppStyled className={`App ${themeClassName(isDarkMode)}`}>
      <header className="App-header">
        <Header />
      </header>
      <MainStyled>
        <Outlet />
      </MainStyled>
    </AppStyled>
  );
}

export default App;
