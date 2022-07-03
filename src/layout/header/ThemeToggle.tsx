import { DarkModeActions } from "./DarkModeActions";
import { LightModeActions } from "./LightModeActions";

type ThemeModeProps = {
  isDarkMode: boolean;
};

export function ThemeToggle({ isDarkMode }: ThemeModeProps) {
  return !isDarkMode ? <LightModeActions /> : <DarkModeActions />;
}
