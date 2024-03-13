import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "~/hooks/theme";

export default function ThemeTrigger() {
  const [isDarkMode, setTheme] = useTheme();

  return (
    <button onClick={() => setTheme()} className="app-button">
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
