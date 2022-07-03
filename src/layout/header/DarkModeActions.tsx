import { FaSun } from "react-icons/fa";
import { ModeActions } from "./ModeActions";

export function DarkModeActions() {
  return (
    <ModeActions>
      <FaSun />
      <span>Light Mode</span>
    </ModeActions>
  );
}
