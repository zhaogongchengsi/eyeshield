import { Button } from "@radix-ui/themes";
import { useTheme } from "~/hooks/theme";

export default function Index() {
    const [theme, setTheme] = useTheme();

    console.log(theme);
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Button onClick={() => setTheme("dark")}>dark</Button>
      <Button onClick={() => setTheme("light")}>light</Button>
    </div>
  );
}
