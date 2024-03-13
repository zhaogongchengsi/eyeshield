import { IconButton } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "~/hooks/theme";

export default function ThemeTrigger() {
  const [isDarkMode, setTheme] = useTheme();

  return (
    <IconButton onClick={() => setTheme()} radius="full" className="cursor-pointer!" variant="soft">
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
}
