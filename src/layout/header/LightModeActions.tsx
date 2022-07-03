import { FaMoon } from "react-icons/fa";
import { ModeActions } from "./ModeActions";

export function LightModeActions() {
  return (
    <ModeActions>
      <FaMoon />
      <span>Dark Mode</span>
    </ModeActions>
  );
}
