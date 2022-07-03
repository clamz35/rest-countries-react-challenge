import { useAtom } from "jotai";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import "./assets/scss/styles.scss";
import { Home } from "./components/home";
import { Header } from "./layout/header/Header";
import { isDarkModeAtom } from "./stores/theme.store";
import { styled } from "./utils/breakpoints";
import { themeClassName } from "./utils/theme-class-name";

const AppStyled = styled("div", {
  height: "100%",
  color: "var(--clr-primary)",
  backgroundColor: "var(--clr-primary-contrast)",
  "&.dark-mode": {
    "--clr-primary": "hsl(0, 0%, 100%)",
    "--clr-primary-300": "hsl(0, 0%, 100%)",
    "--clr-primary-contrast-300": "hsl(209, 23%, 22%)",
    "--clr-primary-contrast": " hsl(207, 26%, 17%)",
    "--clr-secondary-contrast": " hsl(209, 23%, 22%)",
  },
});

const MainStyled = styled("main", {
  margin: "40px 28px",
});

function App() {
  const [isDarkMode] = useAtom(isDarkModeAtom);
  const queryClient = new QueryClient();
  useEffect(() => {
    document.title = "REST countries app - React";
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AppStyled className={`App ${themeClassName(isDarkMode)}`}>
        <header className="App-header">
          <Header />
        </header>
        <MainStyled>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MainStyled>
      </AppStyled>
    </QueryClientProvider>
  );
}

export default App;
